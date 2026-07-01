# CUSTOMIZATION_GUIDE.md

图标与个人主页定制：

1. 图标（Logo）
- 格式：SVG 或 512x512 PNG
- 上传到 `/public/assets/logo.svg`，修改 `frontend/config/site.js` 的 logo 路径

2. 个人主页模板
- 前端组件位于 `frontend/components/profile/`
- 修改 `profile` 组件，替换头像、简介、展示模块（关系图、分析）

3. 术语替换
- 所有可替换文案集中在 `frontend/locales/terms.json`，编辑后重建前端

4. 参考平台
- Obsidian：用于关系图 UI 思路
- Discourse：审批与社区交互参考

说明：我不会自动替换你的未完成内容，只提供指南和示例组件。
