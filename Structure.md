src/
│
├── app/                # genral setting (config)
│   ├── router.jsx
│   └── store.js (لو هتستخدم state management)
│
├── assets/             # image - icons - fonts
│
├── components/         # reusable components (buttons, inputs...)
│
├── features/           # feature
│   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   │
│   ├── home/
│   │   ├── pages/
│   │   └── components/
│
├── hooks/              # custom hooks 
│
├── layouts/            # layouts (Navbar, Sidebar...)
│
├── services/           # API base + axios config
│
├── utils/              # helper functions
│
├── App.jsx
└── main.jsx


-> command to genrate this Structure 
mkdir -p src/{app,assets,components,features/auth/{pages,components,services,hooks},features/home/{pages,components},hooks,layouts,services,utils} && touch src/app/{router.jsx,store.js} 