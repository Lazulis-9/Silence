# ARCHITECTURE.md

系统分层：

1. 前端（Next.js）
- SSR/CSR 混合渲染
- 页面：登录/注册/问卷/社区首页/帖子/商品/关系导图/个人中心/管理员 Dashboard
- 静态资源通过 CDN（部署时可加）

2. 后端（Node.js + Express 或 Fastify）
- 认证与会话：基于 JWT + 邮箱验证
- 管理密钥中间件：保护高权限接口（需要管理员密钥）
- 审批队列：注册申请、充值申请、上架申请
- 文件存储：图片存到 Supabase Storage 或 S3 兼容存储

3. 数据库（PostgreSQL - 推荐 Supabase）
- 表结构详见 DATABASE_SCHEMA.md
- 所有敏感字段使用加密函数（可使用 pgcrypto 或在应用层加密）

4. 安全措施
- HTTPS 强制
- 所有 API 限速（rate-limiting）
- 管理操作需二次确认
- 备份策略与恢复机制

5. 部署与扩展
- 容器化：Docker Compose + 可扩展到 Kubernetes
- 建议初期使用 Render / Railway / DigitalOcean，长期可自建多节点

