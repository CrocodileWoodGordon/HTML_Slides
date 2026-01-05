# TodoList Manager

A modern, dark-themed todo list web app with localStorage persistence, import/export, sorting, and numeric priorities (1–256).

## Features
- Add todos with name, deadline (optional), and numeric priority (1 = highest; default 2)
- Toggle completion by clicking the card (strikethrough)
- Delete individual items
- Automatic sorting: deadline ascending, then priority ascending (lower number = higher priority), then name
- Expired deadline highlighting (red) for incomplete items
- Empty state messaging
- Import/Export JSON with validation and confirmation
- LocalStorage persistence (`todolist_items`)
- Dark modern UI with gradient accents, responsive layout, hover/transition effects

## File Structure
```
todolist/
├── index.html       # Entry page
├── css/
│   └── style.css    # Styling
└── js/
    └── script.js    # Logic
```

## Usage
1) Open `index.html` in a browser.
2) Add todos via the bottom sticky form:
   - Name (required)
   - Deadline (optional date)
   - Priority: number 1–256 (default 2)
3) Click a todo (not the trash icon) to toggle completion.
4) Click the trash icon to delete.
5) Import/Export buttons (top right) handle JSON files. Import replaces current data after confirmation.

## Data Format (Export JSON)
```json
{
  "version": "1.0",
  "exportedAt": "2025-01-01T00:00:00.000Z",
  "items": [
    {
      "name": "Example",
      "deadline": "2025-01-10",
      "priority": 2,
      "completed": false
    }
  ]
}
```

## Priority Rules
- Range: 1–256 (clamped on input/import)
- Sorting: lower number = higher priority
- Badge colors: 1–64 (high), 65–160 (medium), 161–256 (low)

## Notes
- Clearing browser storage removes saved todos.
- Legacy imports with "High/Medium/Low" map to 1/2/3 automatically.
- CSV import is not implemented in this app (JSON only).
