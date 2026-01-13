﻿# Temp Email - 临时邮箱服务

[![Deploy to Cloudflare Workers](https://d1r7b50w78a6pv.cloudfront.net/deploy/button.svg)](https://dash.cloudflare.com/sign-up/workers-and-pages)

## 📋 目录
- [项目概述](#-项目概述)
- [🌟 功能特性](#-功能特性)
- [📸 项目展示](#-项目展示)
- [🔄 版本与路线图](#-版本与路线图)
- [🔧 配置与部署](#-配置与部署)
- [📋 API 文档](#-api-文档)
- [🧪 测试与质量保证](#-测试与质量保证)
- [📊 监控与告警](#-监控与告警)
- [🔄 CI/CD 自动化](#-cicd-自动化)
- [🛠️ 故障排除](#️-故障排除)
- [许可证](#许可证)

## 📖 项目概述

这是一个基于 Cloudflare Workers 和 D1 数据库的临时邮箱服务，具有现代化界面和丰富的管理功能。

## 🌟 功能特性

### 🎨 现代化界面
- 🌈 **毛玻璃效果**：采用现代化的毛玻璃（Glassmorphism）设计风格
- 🎯 **简约美观**：浅色背景，动态渐变，视觉效果出色
- 📱 **响应式设计**：完美适配桌面和移动设备
- ✨ **动画效果**：平滑的过渡动画和微交互反馈

### 📧 邮箱管理
- 🎲 **智能生成**：随机生成临时邮箱地址，支持自定义长度和域名
- 📋 **历史记录**：自动保存历史生成的邮箱，方便重复使用
- 🗑️ **便捷删除**：支持删除单个邮箱和批量管理
- 🔄 **一键切换**：快速在不同邮箱间切换

### 🛠️ 用户管理功能
- **角色与权限**: 三层权限模型（严格管理员 Strict Admin / 高级用户 Admin / 普通用户 User），严格管理员拥有全部权限
- **用户列表**: 查看用户名、角色、邮箱上限/已用、是否允许发件、创建时间等关键信息
- **用户邮箱**: 查看指定用户名下的邮箱列表，支持一键复制邮箱地址
- **创建用户**: 通过用户名/密码/角色创建新用户
- **编辑用户**: 支持改名、重置密码、角色切换、发件权限开关、调整邮箱上限
- **分配邮箱**: 批量为用户分配邮箱地址（支持多行粘贴，自动格式校验）
- **删除用户**: 解除用户与邮箱的绑定关系（不会删除邮箱实体与邮件数据）
- **前端权限防护**: 管理页进入前进行快速鉴权，未授权自动跳转，避免内容闪现
- **操作确认与反馈**: 关键操作提供二次确认弹窗与统一 Toast 提示，操作状态与结果清晰可见

### 💌 邮件功能
- 📧 **实时接收**：自动接收和显示邮件，支持HTML和纯文本
- 🔄 **自动刷新**：选中邮箱后每8秒自动检查新邮件
- 🔍 **智能预览**：自动提取和高亮显示验证码内容
- 📖 **详细查看**：优化的邮件详情显示，支持完整内容渲染
- 📋 **一键复制**：智能识别验证码并优先复制，或复制完整邮件内容
- 🗑️ **灵活删除**：支持删除单个邮件或清空整个邮箱
- ✉️ **发件支持（Resend）**：已接入 Resend，可使用临时邮箱地址发送邮件并查看发件记录（发件箱），支持自定义发件显示名（`fromName`）与批量/定时/取消等能力。**V4.5新增**：支持多域名配置，智能选择API密钥。详情见《[Resend 密钥获取与配置教程](docs/resend.md)》

### 🔧 技术特性
- ⚡ **基于 Cloudflare**：利用全球网络，访问速度快
- 💾 **D1 数据库**：可靠的数据存储，支持数据持久化
- 🔁 **智能初始化**：自动检测数据库状态，避免重复初始化导致的数据丢失
- 🔐 **安全认证**：内置登录系统，保护数据安全
- 🎯 **API 完善**：提供完整的 RESTful API 接口
- 🚀 **缓存系统**：内存缓存系统（表结构、邮箱ID、用户配额、统计数据）
- 🛡️ **速率限制**：基于IP和API路径的请求频率控制
- 📊 **日志系统**：结构化日志记录系统（INFO、WARN、ERROR级别）
- 🧪 **测试框架**：完整的单元测试和集成测试套件（Vitest + ESLint）
- 📈 **监控告警**：Cloudflare Workers Analytics 监控和告警配置
- 🔄 **CI/CD**：GitHub Actions 自动化测试和部署流水线


## 📸 项目展示
### 体验地址： `https://tempmail.noxen.de5.net`

### 体验账号： 
- 访客用户名：guest
- 访客密码：123456

更多展示详见：[展示文档](pic/)

#### 登陆
![登陆页面](pic/dlu.png)

#### 首页
![首页展示](pic/shouye.png)

![单个邮箱首页](./pic/v4/xiugaiquanju.png)
![单个邮箱首页](./pic/v4/liebiao.png)

### 全部邮箱预览
#### [更多展示点击查看](pic/)

### 单个邮箱页
![单个邮箱首页](./pic/v4/youxiang.png)

## 🚀 部署指南

### 方案一：Cloudflare 一键部署（推荐）

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/your-username/temp-email)

点击上方按钮，使用 Cloudflare 官方的一键部署功能，无需本地环境配置。

### 方案二：GitHub Actions 自动部署

适合希望自动同步更新且隐私隔离的用户。无需按钮授权，所有密钥保存在你自己的 Fork 仓库。

**步骤：**
- Fork 仓库到你的 GitHub 账户
- 在 Fork 仓库 Settings → Secrets and variables → Actions 添加以下 Secrets（至少前五项）：
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
  - `MAIL_DOMAIN`
  - `ADMIN_PASSWORD`
  - `JWT_TOKEN`
  - 可选：`ADMIN_NAME`、`GUEST_PASSWORD`、`RESEND_API_KEY` 或 `RESEND_TOKEN`、`FORWARD_RULES`
- 打开 Actions，选择"Manual Deploy (Workers)"并运行工作流
- 首次部署后，系统会自动检测并初始化数据库（如尚未初始化）。如需手动初始化数据库：运行 `npm run d1:execute-basic:remote`
- 在 Cloudflare Email Routing 中添加 catch‑all，并绑定到该 Worker

### 方案三：本地一键部署

如果你希望在本地环境部署，可以使用以下命令：

```bash
# 安装依赖
npm install

# 一键部署（自动创建数据库和初始化）
npm run deploy
```

**前提条件**:
*   已安装 [Node.js](https://nodejs.org/) (>= 20.0.0)
*   已安装 [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
*   已配置 Cloudflare API Token 和账户 ID
*   拥有一个 Cloudflare 账户

**部署步骤**:

1.  **克隆或 Fork 本仓库**

    ```bash
    git clone https://github.com/noxenys/temp-email.git
    cd temp-email
    ```

2.  **安装依赖**

    ```bash
    npm install
    ```

3.  **配置环境变量**：在仓库 Settings → Secrets and variables → Actions 中配置以下环境变量：
   - `MAIL_DOMAIN`：你的邮箱域名，多个域名用逗号分隔
   - `ADMIN_PASSWORD`：管理员密码
   - `JWT_TOKEN`：用于 API 认证的令牌

4.  **部署到 Cloudflare**

    ```bash
    wrangler deploy
    ```

    部署过程中，Wrangler 会自动创建 `wrangler.toml` 中定义的 D1 数据库 (`temp_email_db`) 和 R2 存储桶 (`temp-mail-eml`)。

5.  **初始化数据库**

    首次部署后，需要执行以下命令来初始化数据库表结构：

    ```bash
    npm run d1:execute-basic:remote
    ```

6.  **配置邮件路由**

    为了接收邮件，你需要在 Cloudflare 控制台设置邮件路由：

    *   前往你的域名 > **Email** > **Email Routing**。
    *   在 **Routes** 选项卡下，点击 **Add catch-all**。
    *   在 **Action** 中选择 **Send to a Worker**。
    *   在 **Worker** 下拉菜单中，选择你刚刚部署的 Worker (`temp-email`)。
    *   点击 **Save**。

至此，你的临时邮箱服务已成功部署！

### 邮件路由配置（必需用于收取真实邮件）

如果需要接收真实邮件，需要在 Cloudflare 控制台配置邮件路由：

1. 进入域名的 Email Routing 设置
2. 添加 Catch-all 规则
3. 目标设置为 Worker: `temp-email`

### 设置自定义域名（可选）

在 Worker 设置中添加自定义域名，或使用 workers.dev 子域名。

## 🔄 版本与路线图

### V1
- 前后端基础功能与认证体系
- 邮箱生成、历史记录、邮件列表与详情、清空/删除
- 智能验证码提取与复制、一键复制邮件内容
- 自动刷新与基本的 UI 交互

### V2
- [x] 前端模板解耦合：将首页 UI 从 `public/app.js` 内联模板拆分为独立的 `public/templates/app.html`，降低耦合、便于维护
- [x] 发件（Resend）与发件箱：支持通过 Resend 发送邮件、自定义发件显示名（`fromName`）
- [x] 加邮箱置顶功能，提升用户体验
- [X] 路由逻辑优化 防止首页泄露

### V3
#### 登录与权限
- [X] 新增登录系统与三层权限：超级管理员（Strict Admin）/ 高级用户（Admin）/ 普通用户（User）。
- [X] 默认严格管理员用户名来自 `ADMIN_NAME`（默认 `admin`），密码来自 `ADMIN_PASSWORD`。

#### 管理后台（用户管理）
- [X] 入口：登录后右上角"用户管理"（严格管理员和演示模式默认显示）。
- [X] 查看用户列表（用户名、角色、是否可发件、邮箱上限/已用、创建时间）。
- [X] 查看某个用户的邮箱列表。
- [X] 创建用户（用户名/密码/角色）。
- [X] 编辑用户（改名、改密码、切换角色、是否允许发件、调整邮箱上限）。
- [X] 删除用户（不会删除邮箱实体与邮件，仅解除绑定关系）。
- [X] 分配邮箱给指定用户（支持批量，前端做格式校验）。

### V3.5
#### 性能优化
- [X] **极大提升响应速度**：优化数据库查询效率，减少延迟，显著改善用户体验
- [X] **前端资源优化**：减少静态资源加载时间，提升页面渲染速度

#### 存储增强
- [X] **R2 存储原邮件**：新增 Cloudflare R2 对象存储支持，用于保存邮件原始内容
- [X] **混合存储策略**：D1 数据库存储邮件元数据，R2 存储完整邮件内容，优化存储成本

#### 移动端适配
- [X] **手机端完美适配**：全面优化移动设备体验，响应式设计更加流畅
- [X] **移动端专属界面**：针对手机屏幕优化的界面布局和交互方式
- [X] **触控优化**：优化触屏操作体验，支持手势操作

- [X] 添加支持邮箱单点登陆
- [X] 添加全局邮箱管理功能，支持限制单个邮箱登陆
- [X] 添加邮箱搜索功能，便捷寻找指定邮箱
- [X] 添加随机人名生成邮箱功能
- [X] 列表和卡片两种展示方式

### V4.5
- [X] **多域名发送配置**：支持为不同域名配置不同的Resend API密钥，实现智能发送
- [X] **配置格式扩展**：支持键值对、JSON、单密钥三种配置格式，兼容旧版配置
- [X] **智能API选择**：系统根据发件人域名自动选择对应的API密钥进行发送
- [X] **批量发送优化**：批量发送时自动按域名分组，并行处理提升发送效率

### V5.0
- [X] **SQL优化**：大幅降低数据库行读取数，提升查询性能
- [X] **邮箱管理增强**：添加邮箱管理页面，支持根据域名筛选和登录权限筛选
- [X] **兼容性升级**：更新至2026-01-11兼容性日期，支持最新Cloudflare Workers特性
- [X] **性能优化**：优化 HTMLRewriter 使用方式，提升页面渲染性能

### V5.5（规划中）
- [ ] **AI邮件分类**：集成AI能力，自动分类和标记邮件类型
- [ ] **智能回复**：基于AI的智能邮件回复建议功能
- [ ] **多语言支持**：支持多语言界面和邮件内容处理
- [ ] **高级安全**：增强的安全防护和威胁检测能力

## 🔧 配置与部署

### 快速部署

1. 点击上方 "Deploy to Cloudflare Workers" 按钮
2. 登录 Cloudflare 账户
3. 配置环境变量
4. 完成部署

## 🛠️ 环境变量配置
### 必需环境变量
- `MAIL_DOMAIN`：用于生成临时邮箱的域名，支持多个，使用逗号或空格分隔（如 `example.com, domain2.com`）
  - 示例：`MAIL_DOMAIN="example.com,domain2.com"`
  - 注意：确保已在 Cloudflare Email Routing 中添加 catch-all 规则，并绑定到该 Worker
- `ADMIN_PASSWORD`：后台访问密码（严格管理员登录）
  - 示例：`ADMIN_PASSWORD="your_secure_password"`
- `JWT_TOKEN`：JWT 签名密钥（用于 API 认证）
  - 示例：`JWT_TOKEN="your_jwt_secret_key"`

### 可选环境变量
- `GUEST_PASSWORD`：访客登录密码（可选，启用 guest 账号）
  - 示例：`GUEST_PASSWORD="guest_access_password"`
- `ADMIN_NAME`：严格管理员用户名（默认 `admin`）
  - 示例：`ADMIN_NAME="myadmin"`
- `JWT_SECRET`：JWT 签名密钥（与 JWT_TOKEN 二选一，推荐使用 JWT_TOKEN）
  - 示例：`JWT_SECRET="your_jwt_secret"`
- `ADMIN_PASS`：与 ADMIN_PASSWORD 等价的别名（可选）
  - 示例：`ADMIN_PASS="your_admin_password"`
- `RESEND_API_KEY` / `RESEND_TOKEN`：Resend 发件配置。支持单密钥、多域名键值对、JSON格式
- `FORWARD_RULES`：邮件转发（转发到指定邮箱）。支持两种格式：`JSON 数组` 或 `逗号分隔 KV`
  - JSON格式示例：`FORWARD_RULES='[{"source":"*@example.com","target":"user@gmail.com"}]'`
  - KV格式示例：`FORWARD_RULES="*@example.com=user@gmail.com,*@domain.com=user2@gmail.com"`

### RESEND_API_KEY / RESEND_TOKEN 多域名配置说明

支持三种配置格式，满足不同场景需求：

1. **单密钥格式**（向后兼容）
   ```
   RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxx"
   ```

2. **键值对格式**（推荐）
   ```
   RESEND_API_KEY="domain1.com=re_key1,domain2.com=re_key2"
   ```

3. **JSON格式**
   ```
   RESEND_API_KEY='{"domain1.com":"re_key1","domain2.com":"re_key2"}'
   ```

**使用说明：**
- 发送邮件时，系统会根据发件人邮箱域名自动选择对应的API密钥
- 如果发件人域名未配置对应密钥，发送将失败
- 批量发送时会自动按域名分组，并行处理以提升效率
- 单密钥格式兼容旧版配置，可直接升级使用

**配置工作原理：**
系统在发送邮件时会执行以下步骤：
1. **提取发件人域名**：从发件人邮箱地址（如 `user@domain1.com`）中提取域名部分（`domain1.com`）
2. **查找对应密钥**：在配置中查找与该域名匹配的API密钥
3. **智能选择密钥**：使用匹配的API密钥调用Resend API发送邮件
4. **批量优化**：批量发送时，系统会自动按域名分组，并行处理以提升效率

## 📋 API 文档

请参阅 [API 文档](docs/api.md) 获取完整的 API 接口说明。

## 🧪 测试与质量保证

### 运行测试

```bash
# 安装依赖
npm install

# 运行所有测试
npm test

# 运行测试并生成覆盖率报告
npm run test:coverage

# 监听模式运行测试（开发时使用）
npm run test:watch

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

### 测试覆盖范围

- **单元测试**：核心工具函数（随机ID生成、邮箱验证、时间格式化等）
- **集成测试**：认证功能（JWT令牌、密码哈希等）
- **模拟环境**：Cloudflare Workers 运行时环境模拟
- **覆盖率报告**：支持文本、HTML、LCOV格式的覆盖率报告

### 测试配置

- **测试框架**：Vitest（快速、轻量级的测试运行器）
- **代码检查**：ESLint（代码质量检查）
- **类型检查**：TypeScript（类型安全）
- **覆盖率**：@vitest/coverage-v8（覆盖率统计）

## 📈 监控与告警

### 健康检查端点

项目提供健康检查端点，可用于监控服务状态：

```bash
# 健康检查
curl -X GET https://your-worker.workers.dev/api/health

# 响应示例
{
  "status": "healthy",
  "timestamp": "2026-01-11T00:00:00Z",
  "version": "v5.0",
  "database": "connected",
  "r2": "connected"
}
```

### 告警配置

参考 `docs/monitoring-alerts.md` 配置监控告警：

- **错误率告警**：当错误率超过阈值时触发
- **响应时间告警**：当平均响应时间异常时触发
- **资源使用告警**：监控数据库和存储使用情况
- **自定义告警**：根据业务需求配置自定义告警规则

### 性能优化监控

- **缓存命中率**：监控缓存系统性能
- **数据库查询性能**：监控D1数据库查询效率
- **R2存储性能**：监控对象存储读写性能
- **内存使用**：监控Worker内存使用情况

## 🔄 CI/CD 自动化

项目配置了 GitHub Actions CI/CD 流水线，实现一键自动化部署：

### 部署流程

1. **代码检查**：ESLint 代码质量检查
2. **类型检查**：TypeScript 类型安全检查
3. **单元测试**：运行所有测试并生成覆盖率报告
4. **一键部署**：自动部署到 Cloudflare Workers，包含数据库创建和初始化

### 触发方式

- **自动触发**：推送代码到 `main` 分支时自动部署
- **手动触发**：在 GitHub Actions 页面手动运行部署工作流
- **生产环境**：代码审查后手动部署到生产环境

### 数据库与存储配置

- 数据库名称为 `temp_email_db`，绑定名为 `TEMP_MAIL_DB`
- R2存储桶名称为 `temp-mail-eml`，绑定名为 `MAIL_EML`

## 🛠️ 故障排除

### 常见问题
1. **邮件接收不到**
   - 检查 Cloudflare 邮件路由配置是否正确
   - 确认域名的 MX 记录设置
   - 验证 MAIL_DOMAIN 环境变量配置

2. **数据库连接错误**
   - 确认 D1 数据库绑定名称为 TEMP_MAIL_DB
   - **模式 A**：确认 wrangler 已自动创建 D1/R2 资源并回写配置到 wrangler.toml；必要时重新执行 `wrangler deploy`
   - **模式 B**：检查 database_id / bucket_name 是否已正确填入 wrangler.toml 配置
   - 运行 `wrangler d1 list` 确认数据库存在

3. **登录问题**
   - 确认 ADMIN_PASSWORD 环境变量已设置
   - 检查 JWT_TOKEN 或 JWT_SECRET 配置
   - 尝试清除浏览器缓存和 Cookie

4. **界面显示异常**
   - 确认静态资源路径配置正确
   - 检查浏览器控制台是否有 JavaScript 错误
   - 验证 CSS 文件加载是否正常

5. **自动刷新不工作**
   - 确认已选中邮箱地址
   - 检查浏览器是否支持 Page Visibility API
   - 查看网络连接是否稳定

## 许可证

Apache-2.0 License