# Supabase recovery & emergency actions

如果你的 Supabase 项目被暂停并且密钥已暴露，请按下面步骤紧急处理（面向零基础用户）。

## 一步一图（紧急优先级）

1) 立即把仓库设为私有（在 GitHub 上）
   - 打开 https://github.com/Lazulis-9/Silence
   - 点击页面右上角 "Settings"
   - 滚动到最下方 "Danger Zone"，点击 "Change repository visibility" → 选择 "Make private" → 按提示确认

2) 立刻删除仓库中的 .env.local 文件（防止继续泄露）
   - 在仓库文件列表中点击 `.env.local` → 右上角点击垃圾桶图标（Delete this file）→ 在下方 Commit changes

3) 在仓库根目录创建或更新 `.gitignore` 并加入 `.env.local`（防止未来误提交）

4) 如果你能访问 Supabase 控制台并且可以恢复项目，请马上恢复并轮换密钥：
   - 登录 https://app.supabase.com → 进入项目 → Settings → API
   - 在 Project API Keys 区域，找到 `anon public` 和 `service_role (SECRET)`，点击旁边的 `Rotate` / `Regenerate` 按钮（一次对两个 key 都操作）
   - 复制新生成的 key（只保存在本地或托管平台的 Secrets 中），切勿粘贴到聊天或提交到仓库

5) 如果 Supabase 要求先充值/付费才能恢复（无法在控制台重置密钥），请立刻提交支持请求（下面有模板），并同时创建一个临时免费项目以阻断风险（参见第 7 步）


## 联系 Supabase 支持（模板）

请将下面模板复制粘贴到 Supabase 控制台的 Support / Contact 界面：

```
Subject: Emergency: Exposed API keys for project [项目名] (urgent)

Hello Supabase Support,

My project "[项目名]" (project ref/ID: [项目 ID]) is currently paused. I have accidentally exposed the Project API keys (anon and service_role) publicly and need them revoked immediately to prevent misuse.

I cannot resume/upgrade the project right now. Please:
1) Revoke/rotate the current API keys (anon & service_role) immediately, or temporarily block API access for this project;
2) If revocation requires resuming the project, please perform a forced key rotation without requiring payment or instruct how to proceed for emergency rotation;
3) Confirm once keys are revoked and provide any guidance for next steps.

This is urgent — please respond as soon as possible.

Thank you,
[你的名字] / Project owner
[你的邮箱]
```


## 如果你无法在暂停状态下操作：如何临时阻断风险（免费）

1) 在 Supabase 创建一个新的免费项目（New project），名称可为 `silence-temp`：
   - 进入 https://app.supabase.com → New project → 填写项目名 → 选择免费 tier → Create project
2) 在新项目 Settings → API 中复制新的 Project URL、anon key、service_role key
3) 把你在本地或托管环境（Render/Vercel 等）使用的密钥替换为新项目的 key（仅在环境变量里替换，不要提交到 GitHub）
   - 这一步可以让你继续开发/测试，且避免旧密钥被滥用


## 生成并保存管理员密钥（本地操作）

推荐使用命令行生成强随机密钥（如果你不知道怎么操作，我可以图文教你）：
```
# 在本地 Mac / Linux / Git Bash 中运行：
openssl rand -base64 48
```
把输出保存到离线安全处（密码管理器或加密文件），这个就是 ADMIN_MASTER_KEY。不要公开或贴到任何聊天。


## 备份建议

- 在你恢复项目后：马上在 Supabase 控制台导出数据库备份（Database → Backups 或在 SQL Editor 导出），并在 Storage 界面下载文件对象（图片等）。
- 将备份放到你控制的安全存储（本地硬盘 / 加密云盘）。


## 我可以代为在仓库做的改动（你已授权）
我已受权在仓库里替你：
- 用占位符覆盖 `.env.local` 文件（已完成）
- 创建 `.gitignore` 并加入 `.env.local`（已完成）
- 创建本文件（SUPABASE_RECOVERY.md）以便你随时复制支持请求模板并跟进


如果你需要我继续操作（例如帮助联系 Supabase 支持、演示如何在 Supabase 页面操作、或者创建临时项目），回复你想要我帮忙的具体编号：
- `CONTACT_SUPPORT` → 我会准备一条你可以直接粘贴到 Supabase 支持表单的完整中文/英文信息并告诉你如何提交；
- `CREATE_TEMP_PROJECT` → 我会一步步指导你创建新的免费 Supabase 项目并拿到新 keys；
- `ROTATE_KEYS_GUIDE` → 我会在你进入 Supabase 控制台时逐步指引你点击每个按钮（图文说明）

如果你现在很累，先休息一下。我已经在仓库做了最紧要的文件替换，下一步我们优先联系 Supabase 支持并确保旧 key 失效。
