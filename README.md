# 🎯 Kingshot Hub

A modern, interactive fan site for Kingshot game guides, tools, and alliance coordination resources.

## ✨ Features

### 🎮 Game Guides
- **Event Guides**: Bear Hunt, Viking Vengeance, Terrors
- **Hero Guides**: Chenko and other hero strategies
- **Mechanics**: Rally rules and game mechanics
- **Territory**: Fertile Lands expansion guide

### 🛠️ Interactive Tools
- **Troop Ratio Calculator**: Optimize your 10/10/80 troop mix
- **Promotion Calculator**: Compare L5 training vs promotion costs
- **Real-time Feedback**: Color-coded recommendations

### 📋 Alliance Notices
- **Copyable Templates**: One-click copying for alliance chat
- **Tabbed Interface**: Easy navigation between different notices
- **Toast Notifications**: Visual feedback for copy actions
- **Ready-to-Paste**: Formatted messages for game chat

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🎨 UI/UX Features

- **Modern Design**: Professional, clean interface
- **Responsive**: Works on desktop, tablet, and mobile
- **Dark Mode**: Automatic theme switching
- **Interactive Elements**: Hover effects, animations, feedback
- **Accessibility**: ARIA labels and semantic HTML

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/code4/Kingshot-hub.git
cd kingshot-hub

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🏗️ Project Structure

```
kingshot-hub/
├── app/                    # Next.js App Router pages
│   ├── events/            # Event guides (Bear Hunt, Vikings, Terrors)
│   ├── heroes/            # Hero guides and strategies
│   ├── mechanics/         # Game mechanics and rules
│   ├── territory/         # Territory expansion guides
│   ├── tools/             # Interactive calculators
│   └── alliance-notices/  # Copyable alliance templates
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── CopyableNotice.tsx # Interactive copy component
│   └── PageHeader.tsx    # Page header component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎯 Key Components

### CopyableNotice
Interactive component for copying alliance notices with:
- One-click copy functionality
- Toast notifications
- Visual feedback (copy/check icons)
- Formatted text for game chat

### PageHeader
Consistent page headers with:
- Title and description
- Optional badges and icons
- Responsive design

### Interactive Tools
- **Troop Calculator**: Real-time ratio analysis
- **Promotion Calculator**: Resource cost comparison
- **Visual Feedback**: Color-coded recommendations

## 🎨 Design System

Built with shadcn/ui components:
- **Cards**: Content organization
- **Badges**: Status indicators
- **Buttons**: Interactive elements
- **Tabs**: Content navigation
- **Toast**: User notifications
- **Input**: Form controls

## 📱 Responsive Design

- **Desktop**: Full-featured interface
- **Tablet**: Optimized layout
- **Mobile**: Touch-friendly interactions

## 🚀 Deployment

The project is ready for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables are automatically configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This is a fan site and is not affiliated with the official Kingshot game publisher.

## 🎮 Game Information

Kingshot Hub provides:
- **Event Strategies**: Optimal approaches for game events
- **Hero Guides**: Best hero combinations and setups
- **Alliance Tools**: Ready-to-use communication templates
- **Calculators**: Resource optimization tools

## 🔗 Links

- **Live Site**: [Deployed on Vercel]
- **GitHub**: https://github.com/code4/Kingshot-hub
- **Game**: Kingshot (Mobile Strategy Game)

---

Built with ❤️ for the Kingshot community
