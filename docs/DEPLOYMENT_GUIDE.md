# DEPLOYMENT_GUIDE.md

快速部署（概要）

1. 环境准备
- 申请国外 VPS 或使用 Render / Railway
- 准备域名（silence.lapis-lazuli.org）
- 准备 PostgreSQL（Supabase 或 主机上自己安装）

2. 克隆仓库并安装
```bash
git clone https://github.com/Lazulis-9/Silence.git
cd Silence
# 后端
cd backend
npm install
# 前端
cd ../frontend
npm install
```

3. 环境变量
- 在仓库根目录创建 `.env.production`，填入生产环境变量（数据库 URL、邮件服务、管理员密钥等）

4. 启动（开发）
- 后���：`npm run dev`（在 backend）
- 前端：`npm run dev`（在 frontend）

5. 生产部署（示例 Docker Compose）
- 编辑 `docker-compose.yml`，填入环境变量
- 运行：`docker-compose up -d --build`

6. SSL 与域名
- 在域名管理控制台添加 A/CAA 记录指向服务器
- 使用 Let's Encrypt 或 CDN 提供的 SSL

更多详细步骤请查看 admin manual 与 setup 脚本。
