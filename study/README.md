# 课程表管理系统 / Timetable Management System

[English](#english) | [中文](#中文)

---

## 中文

一个功能完善的在线课程表管理工具，支持课程添加、编辑、删除和时间自定义等功能。

直接将index.html下载到本地即可使用。

## 功能特性

### 📅 课程管理
- **添加课程**：选择星期、起始/结束节次，输入课程信息快速添加
- **删除课程**：支持多选删除，按住 Ctrl 可选择多个时间段
- **课程冲突检测**：添加课程时自动检测时间冲突，提供"覆盖"和"跳过"选项
- **清空功能**：一键清空所有课程数据

### 🎨 视觉效果
- **自动配色**：每门不同的课程自动分配独特的渐变色（22种配色方案）
- **课程合并显示**：相邻相同课程自动合并为一个视觉块，隐藏分割线
- **暗色主题**：现代化的深色界面设计，护眼舒适
- **响应式布局**：适配不同屏幕尺寸

### ⏰ 时间管理
- **自定义时间**：点击左侧时间栏可编辑上课时间（支持回车保存、ESC取消）
- **恢复默认**：一键恢复初始时间设置
- **时间持久化**：自定义时间自动保存到浏览器本地存储

### 💾 数据持久化
- 使用 localStorage 自动保存所有数据
- 刷新页面后数据不丢失
- 支持导入/导出功能（计划中）

## 使用说明

### 添加课程
1. 选择星期（周一至周日）
2. 选择起始节次和结束节次
3. 输入课程信息（如：数学分析I 教室A101 张老师）
4. 点击"添加/更新"按钮
5. 如遇冲突，选择"覆盖"（替换原有课程）或"跳过"（仅填充空白时段）

### 删除课程
1. 在课程表中点击要删除的时间段（按住 Ctrl 可多选）
2. 点击"删除选中"按钮
3. 或点击"清空全部"删除所有课程

### 编辑时间
1. 点击左侧时间栏（如"第1节\n8:00-8:45"）
2. 在弹出的文本框中编辑时间
3. 按 Enter 保存或点击外部区域自动保存
4. 按 ESC 取消编辑

### 快捷操作
- **Ctrl + 点击**：多选时间段
- **Enter**：保存时间编辑
- **ESC**：取消时间编辑
- **点击单元格**：自动填充表单中的时间信息

## 技术特点

- 纯前端实现，无需服务器
- 使用原生 JavaScript，无依赖
- CSS Grid 布局，现代化设计
- localStorage 数据持久化
- 响应式交互设计

## 默认时间设置

| 节次 | 时间 |
|------|------|
| 第1节 | 8:00-8:45 |
| 第2节 | 8:50-9:35 |
| 第3节 | 9:50-10:35 |
| 第4节 | 10:40-11:25 |
| 第5节 | 11:30-12:15 |
| 第6节 | 13:00-13:45 |
| 第7节 | 13:50-14:35 |
| 第8节 | 14:50-15:35 |
| 第9节 | 15:40-16:25 |
| 第10节 | 16:30-17:15 |
| 第11节 | 18:00-18:45 |
| 第12节 | 18:50-19:35 |
| 第13节 | 19:40-20:25 |
| 第14节 | 20:30-21:15 |

## 配色方案

系统内置 22 种渐变配色，自动为不同课程分配：
- 蓝紫渐变
- 粉红渐变
- 绿色渐变
- 橙黄渐变
- 青蓝渐变
- ... 等

## 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 数据存储

数据存储在浏览器的 localStorage 中：
- `timetable-data`：课程数据
- `timetable-slots`：自定义时间设置

**注意**：清除浏览器缓存会删除所有数据，请定期备份重要课程表信息。

## 开发信息

- **版本**：1.0.0
- **开发时间**：2024-2025
- **技术栈**：HTML5 + CSS3 + JavaScript (ES6+)

## 后续计划

- [ ] 导入/导出课程表（JSON/CSV格式）
- [ ] 打印课程表功能
- [ ] 课程备注和详情功能
- [ ] 多学期管理
- [ ] 移动端优化
- [ ] 课程统计和学分计算

---

💡 **提示**：首次使用建议先熟悉界面，可以先添加几门测试课程体验功能。

---

<a name="english"></a>

## English

A full-featured online timetable management tool that supports course addition, editing, deletion, and custom time settings.

Directly download the index.html file to your computer and start your use.

### 📅 Features

#### Course Management
- **Add Courses**: Select day, start/end period, and enter course information to add quickly
- **Delete Courses**: Support multi-selection deletion, hold Ctrl to select multiple time slots
- **Conflict Detection**: Automatically detect time conflicts when adding courses, provide "Overwrite" and "Skip" options
- **Clear All**: Clear all course data with one click

#### 🎨 Visual Effects
- **Auto Color Scheme**: Each different course is automatically assigned a unique gradient color (22 color schemes)
- **Course Merging**: Adjacent identical courses are automatically merged into one visual block, hiding dividers
- **Dark Theme**: Modern dark interface design, eye-friendly and comfortable
- **Responsive Layout**: Adapts to different screen sizes

#### ⏰ Time Management
- **Custom Time**: Click on the left time column to edit class time (support Enter to save, ESC to cancel)
- **Restore Default**: Restore initial time settings with one click
- **Time Persistence**: Custom time automatically saved to browser local storage

#### 💾 Data Persistence
- Automatically save all data using localStorage
- Data is not lost after refreshing the page
- Support import/export (planned)

### Usage Guide

#### Adding Courses
1. Select day of the week (Monday to Sunday)
2. Select start period and end period
3. Enter course information (e.g., Calculus I Room A101 Prof. Zhang)
4. Click "Add/Update" button
5. If conflict occurs, choose "Overwrite" (replace existing course) or "Skip" (fill only empty slots)

#### Deleting Courses
1. Click on the time slot to delete in the timetable (hold Ctrl for multi-select)
2. Click "Delete Selected" button
3. Or click "Clear All" to delete all courses

#### Editing Time
1. Click on the left time column (e.g., "Period 1\n8:00-8:45")
2. Edit time in the popup text box
3. Press Enter to save or click outside to auto-save
4. Press ESC to cancel editing

#### Keyboard Shortcuts
- **Ctrl + Click**: Multi-select time slots
- **Enter**: Save time editing
- **ESC**: Cancel time editing
- **Click Cell**: Auto-fill time information in the form

### Technical Features

- Pure frontend implementation, no server required
- Native JavaScript, no dependencies
- CSS Grid layout, modern design
- localStorage data persistence
- Responsive interactive design

### Default Time Settings

| Period | Time |
|--------|------|
| Period 1 | 8:00-8:45 |
| Period 2 | 8:50-9:35 |
| Period 3 | 9:50-10:35 |
| Period 4 | 10:40-11:25 |
| Period 5 | 11:30-12:15 |
| Period 6 | 13:00-13:45 |
| Period 7 | 13:50-14:35 |
| Period 8 | 14:50-15:35 |
| Period 9 | 15:40-16:25 |
| Period 10 | 16:30-17:15 |
| Period 11 | 18:00-18:45 |
| Period 12 | 18:50-19:35 |
| Period 13 | 19:40-20:25 |
| Period 14 | 20:30-21:15 |

### Color Schemes

The system has 22 built-in gradient colors, automatically assigned to different courses:
- Blue-purple gradient
- Pink-red gradient
- Green gradient
- Orange-yellow gradient
- Cyan-blue gradient
- ... and more

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Data Storage

Data is stored in browser's localStorage:
- `timetable-data`: Course data
- `timetable-slots`: Custom time settings

**Note**: Clearing browser cache will delete all data. Please backup important timetable information regularly.

### Development Info

- **Version**: 1.0.0
- **Development Time**: 2024-2025
- **Tech Stack**: HTML5 + CSS3 + JavaScript (ES6+)

### Roadmap

- [ ] Import/export timetable (JSON/CSV format)
- [ ] Print timetable function
- [ ] Course notes and details
- [ ] Multi-semester management
- [ ] Mobile optimization
- [ ] Course statistics and credit calculation

---

💡 **Tip**: For first-time users, it's recommended to familiarize yourself with the interface by adding a few test courses to experience the features.
