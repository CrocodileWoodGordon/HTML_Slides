(() => {
  const storageKey = 'todolist_items';
  const listEl = document.getElementById('todoList');
  const emptyEl = document.getElementById('emptyState');
  const form = document.getElementById('todoForm');
  const nameInput = document.getElementById('todoName');
  const deadlineInput = document.getElementById('todoDeadline');
  const priorityInput = document.getElementById('todoPriority');
  const nameError = document.getElementById('nameError');
  const importBtn = document.getElementById('importBtn');
  const exportBtn = document.getElementById('exportBtn');
  const fileInput = document.getElementById('fileInput');

  let todos = [];

  function normalizePriority(p) {
    if (typeof p === 'string') {
      if (p === 'High') return 1;
      if (p === 'Medium') return 2;
      if (p === 'Low') return 3;
    }
    let n = parseInt(p, 10);
    if (Number.isNaN(n)) n = 128;
    if (n < 1) n = 1;
    if (n > 256) n = 256;
    return n;
  }

  function load() {
    try {
      const raw = localStorage.getItem(storageKey);
      todos = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(todos)) todos = [];
    } catch (e) {
      todos = [];
    }
  }

  function save() {
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }

  function sortTodos(arr) {
    return arr.slice().sort((a, b) => {
      const aHasDeadline = !!a.deadline;
      const bHasDeadline = !!b.deadline;
      if (aHasDeadline && bHasDeadline) {
        if (a.deadline !== b.deadline) return a.deadline.localeCompare(b.deadline);
      } else if (aHasDeadline && !bHasDeadline) {
        return -1;
      } else if (!aHasDeadline && bHasDeadline) {
        return 1;
      }
      const prA = normalizePriority(a.priority);
      const prB = normalizePriority(b.priority);
      if (prA !== prB) return prA - prB; // lower number = higher priority
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  function formatDate(dateStr) {
    if (!dateStr) return 'No Deadline';
    return dateStr;
  }

  function isExpired(deadline, completed) {
    if (!deadline || completed) return false;
    const today = new Date();
    const d = new Date(deadline + 'T00:00:00');
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  function render() {
    listEl.innerHTML = '';
    const sorted = sortTodos(todos);
    if (!sorted.length) {
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';

    sorted.forEach((todo, idx) => {
      const card = document.createElement('div');
      card.className = 'todo-card';
      card.dataset.index = idx;

      const main = document.createElement('div');
      main.className = 'todo-main';

      const title = document.createElement('h3');
      title.className = 'todo-title' + (todo.completed ? ' completed' : '');
      title.textContent = todo.name;
      main.appendChild(title);

      const meta = document.createElement('div');
      meta.className = 'todo-meta';

      const deadline = document.createElement('span');
      deadline.className = 'deadline';
      const expired = isExpired(todo.deadline, todo.completed);
      if (expired) deadline.classList.add('expired');
      deadline.innerHTML = `<span class="label">Deadline:</span> ${formatDate(todo.deadline)}${expired ? ' · Expired' : ''}`;
      meta.appendChild(deadline);

      const badge = document.createElement('span');
      const pri = normalizePriority(todo.priority);
      const badgeClass = pri <= 64 ? 'high' : pri <= 160 ? 'medium' : 'low';
      const badgeLabel = `Priority ${pri}`;
      badge.className = `badge ${badgeClass}`;
      badge.textContent = badgeLabel;
      meta.appendChild(badge);

      main.appendChild(meta);

      const actions = document.createElement('div');
      actions.className = 'todo-actions';
      const delBtn = document.createElement('button');
      delBtn.className = 'delete-btn';
      delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTodo(idx);
      });
      actions.appendChild(delBtn);

      card.appendChild(main);
      card.appendChild(actions);

      card.addEventListener('click', () => toggleComplete(idx));

      listEl.appendChild(card);
    });
  }

  function addTodo(name, deadline, priority) {
    const todo = {
      name: name.trim(),
      deadline: deadline || null,
      priority: normalizePriority(priority),
      completed: false,
    };
    todos.push(todo);
    save();
    render();
  }

  function deleteTodo(idx) {
    const sorted = sortTodos(todos);
    const target = sorted[idx];
    const originalIndex = todos.findIndex(t => t === target);
    if (originalIndex !== -1) {
      todos.splice(originalIndex, 1);
      save();
      render();
    }
  }

  function toggleComplete(idx) {
    const sorted = sortTodos(todos);
    const target = sorted[idx];
    target.completed = !target.completed;
    save();
    render();
  }

  function showNameError() {
    nameError.style.display = 'block';
    nameInput.classList.add('has-error');
    setTimeout(() => nameError.style.display = 'none', 1800);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const deadline = deadlineInput.value || null;
    const priority = normalizePriority(priorityInput.value);
    if (!name) {
      showNameError();
      return;
    }
    addTodo(name, deadline, priority);
    form.reset();
    priorityInput.value = '128';
  }

  function exportJSON() {
    const payload = { version: '1.0', exportedAt: new Date().toISOString(), items: todos };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    download(blob, `todolist-export-${Date.now()}.json`);
  }

  function importJSON(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(reader.result);
        if (!obj || !Array.isArray(obj.items)) throw new Error('Invalid format');
        // Validate items
        const valid = obj.items.every(it => typeof it.name === 'string' && normalizePriority(it.priority) >= 1 && normalizePriority(it.priority) <= 256);
        if (!valid) throw new Error('Invalid todo fields');
        if (!confirm('Import will replace current todos. Continue?')) return;
        todos = obj.items.map(it => ({
          name: it.name,
          deadline: it.deadline || null,
          priority: normalizePriority(it.priority),
          completed: !!it.completed,
        }));
        save();
        render();
        alert('Import success');
      } catch (err) {
        alert('Import failed: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleImportClick() { fileInput.click(); }
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.name.endsWith('.json')) { alert('Please select a JSON file'); return; }
    importJSON(file);
    fileInput.value = '';
  }

  // Init
  load();
  render();

  form.addEventListener('submit', handleSubmit);
  exportBtn.addEventListener('click', exportJSON);
  importBtn.addEventListener('click', handleImportClick);
  fileInput.addEventListener('change', handleFileChange);
})();
