# 🃏 Balatro Helper

> 小丑牌 Tier List & 决策助手

[English](./README.en.md) | **简体中文**

一个为 [Balatro](https://www.playbalatro.com/) 玩家打造的小丑牌（Joker）查询与评分工具。收录全部 **150 张小丑牌**，按功能分类，附带 Tier 评级、专家点评和详细效果说明，帮助你在游戏中做出更明智的选牌决策。

## ✨ 功能特性

- 🔍 **搜索** — 支持中英文名称、分类关键词实时搜索
- 🏷️ **分类筛选** — 按小丑牌功能角色快速定位（倍率加算/乘算、筹码、经济、复用、功能）
- 📊 **Tier 分组** — S/A/B/C/D 五级评分体系，一目了然
- 💬 **专家点评** — 每张牌附带简明的策略评价
- 🖼️ **卡牌图鉴** — 自动加载卡牌图片，像素风格还原
- 📱 **响应式** — 适配桌面和移动端

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/dengshu2/balatro-helper.git
cd balatro-helper

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 `http://localhost:5173` 即可查看。

### 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录，可直接部署到任何静态托管平台（Vercel、Netlify、GitHub Pages 等）。

## 📁 项目结构

```
balatro-helper/
├── public/
│   ├── data/                   # 小丑牌数据（JSON）
│   │   ├── jokers_additive_mult.json   # 加算倍率
│   │   ├── jokers_chips.json           # 筹码
│   │   ├── jokers_multiplicative_mult.json  # 乘算倍率
│   │   ├── jokers_economy.json         # 经济
│   │   ├── jokers_retrigger.json       # 复用卡牌
│   │   └── jokers_effect.json          # 功能
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.tsx                 # 主应用组件
│   ├── index.css               # 全局样式
│   └── main.tsx                # 入口文件
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🗂️ 数据来源

- 卡牌基础数据：[Balatro Wiki](https://balatrowiki.org/)
- Tier 评分与专家点评：社区资深玩家评测整理
- 卡牌图片：Balatro Wiki CDN

## 🛠️ 技术栈

- **框架**：[React](https://react.dev/) 19 + TypeScript
- **构建**：[Vite](https://vite.dev/) 8
- **样式**：Vanilla CSS（暗色主题）
- **字体**：[Inter](https://fonts.google.com/specimen/Inter)（Google Fonts）

## 📄 License

[MIT](./LICENSE)
