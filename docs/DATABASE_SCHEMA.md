# DATABASE_SCHEMA.md

主要表：

1. users
- id UUID PRIMARY KEY
- email TEXT UNIQUE
- email_verified BOOLEAN
- display_name TEXT NULL
- real_name_encrypted TEXT NULL -- 管理员可解密
- role ENUM(user, admin)
- status ENUM(pending, active, banned)
- created_at TIMESTAMP

2. questionnaires
- id UUID PRIMARY KEY
- user_id UUID REFERENCES users(id)
- answers JSONB -- 存储 30 个问题的键值
- passed BOOLEAN
- reviewed_by UUID REFERENCES users(id)
- reviewed_at TIMESTAMP
- created_at TIMESTAMP

3. posts
- id UUID PRIMARY KEY
- user_id UUID REFERENCES users(id)
- title TEXT
- body TEXT
- media JSONB
- section ENUM(交流部, 理论部, 公告)
- created_at TIMESTAMP
- hidden BOOLEAN DEFAULT FALSE
- subject_identifier TEXT -- 若匿名则为随机编号

4. interactions (交互)
- id UUID PRIMARY KEY
- post_id UUID REFERENCES posts(id)
- actor_id UUID REFERENCES users(id)
- type ENUM(reply, mention, other)
- created_at TIMESTAMP

5. recognitions (认同数)
- id UUID PRIMARY KEY
- target_id UUID (post 或用户)
- actor_id UUID
- created_at TIMESTAMP

6. records (记录数 / 收藏)
- id UUID PRIMARY KEY
- user_id UUID
- target_type ENUM(post, user, resource)
- target_id UUID
- created_at TIMESTAMP

7. products
- id UUID PRIMARY KEY
- seller_id UUID REFERENCES users(id)
- name TEXT
- description TEXT
- price_lc NUMERIC
- media JSONB
- status ENUM(pending, approved, rejected)
- created_at TIMESTAMP

8. orders
- id UUID PRIMARY KEY
- buyer_id UUID
- product_id UUID
- amount_lc NUMERIC
- status ENUM(requested, completed, refunded)
- created_at TIMESTAMP

9. topup_requests
- id UUID PRIMARY KEY
- user_id UUID
- amount_usd NUMERIC
- amount_lc NUMERIC
- receipt_media JSONB
- status ENUM(pending, approved, rejected)
- reviewed_by UUID
- reviewed_at TIMESTAMP

10. relations (关系图数据)
- id UUID PRIMARY KEY
- owner_id UUID -- 谁拥有这张关系图
- edges JSONB -- 自定义边集合 [{from: id, to: id, label: ''}]
- nodes JSONB -- 节点元数据
- created_at TIMESTAMP

注：对所有敏感字段（如 real_name）使用加密；备份时注意密钥管理。
