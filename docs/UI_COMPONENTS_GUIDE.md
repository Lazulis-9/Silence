# UI_COMPONENTS_GUIDE.md

推荐组件列表：
- 按钮样式（primary/secondary/destructive）
- 卡片组件（帖子/商品/用户）
- Modal 弹窗（审批/确认）
- 关系图组件（推荐使用 vis.js 或 dagre-d3）
- 图表组件（推荐 Chart.js 或 Recharts）

如何导入：
1. 在 frontend 安装依赖，例如：
```
npm install vis-network chart.js react-chartjs-2
```
2. 在 `frontend/components/` 中创建 `RelationGraph.jsx` 和 `UserAnalytics.jsx` 示例组件
3. 在页面中引入并传入数据
