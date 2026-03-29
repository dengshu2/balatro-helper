# 🃏 Balatro Helper

> Joker Tier List & Decision Helper

**[简体中文](./README.md)** | English

A Joker card lookup and rating tool built for [Balatro](https://www.playbalatro.com/) players. Covers all **150 Joker cards** with categorized roles, tier ratings, expert commentary, and detailed effect descriptions to help you make smarter choices in-game.

## ✨ Features

- 🔍 **Search** — Real-time search by Chinese/English name or category keywords
- 🏷️ **Category Filters** — Filter by Joker role (Additive Mult, Multiplicative Mult, Chips, Economy, Retrigger, Effect)
- 📊 **Tier Groups** — S/A/B/C/D five-tier rating system at a glance
- 💬 **Expert Reviews** — Concise strategy commentary for every card
- 🖼️ **Card Gallery** — Auto-loaded card images with pixel-art rendering
- 📱 **Responsive** — Desktop and mobile friendly

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/dengshu/balatro-helper.git
cd balatro-helper

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

Output goes to `dist/` — deployable to any static hosting platform (Vercel, Netlify, GitHub Pages, etc.).

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) 19 + TypeScript
- **Build Tool**: [Vite](https://vite.dev/) 8
- **Styling**: Vanilla CSS (dark theme)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## 🗂️ Data Sources

- Card base data: [Balatro Wiki](https://balatrowiki.org/)
- Tier ratings & expert reviews: Curated from community veteran players
- Card images: Balatro Wiki CDN

## 📄 License

[MIT](./LICENSE)
