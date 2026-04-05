<div align="center">

# 📦 StockManager

### A lightweight offline inventory management app for Android

[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-3DDC84?style=flat-square&logo=react&logoColor=white)](https://reactnative.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.80-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%20%2F%20JavaScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storage](https://img.shields.io/badge/Storage-AsyncStorage-orange?style=flat-square)](https://react-native-async-storage.github.io/async-storage/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

---

## 📖 About

**StockManager** is a cross-platform React Native app for managing personal or small business inventory. It runs entirely offline — no server or account required — storing all inventory data locally on the device via AsyncStorage. The app also includes a separate portfolio showcase built with React Navigation's bottom tab navigator.

---

## ✨ Features

- **Inventory Home Screen** — View all current stock items at a glance
- **Add / Edit Items** — Create and update inventory entries with ease
- **Persistent Local Storage** — All inventory data is saved to the device using AsyncStorage, so data survives app restarts
- **Clear Inventory** — Option to wipe all stored items when needed
- **Portfolio View** — A built-in portfolio section with Home, Projects, Skills, and Contact tabs
- **Responsive Design** — Fluid layout using `react-native-size-matters` and `react-native-responsive-fontsize`
- **Smooth Animations** — Powered by React Native Reanimated and Gesture Handler

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.80 |
| Language | TypeScript + JavaScript |
| Navigation | React Navigation 7 (Bottom Tabs) |
| Local Storage | AsyncStorage (`@react-native-async-storage/async-storage`) |
| Animations | React Native Reanimated 4, React Native Worklets |
| UI | react-native-linear-gradient, react-native-gesture-handler |
| Responsive Layout | react-native-size-matters, react-native-responsive-fontsize |
| Random IDs | react-native-get-random-values |
| Testing | Jest + React Test Renderer |

---

## 📁 Project Structure

```
StockManager/
├── src/
│   └── screens/
│       ├── HomeScreen.jsx              # Main inventory list screen
│       └── App Screens/
│           ├── HomeScreen.jsx          # Portfolio home tab
│           ├── ProjectsScreen.jsx      # Portfolio projects tab
│           ├── SkillsScreen.jsx        # Portfolio skills tab
│           └── ContactScreen.jsx       # Portfolio contact tab
├── App.tsx                             # App entry — renders HomeScreen
├── Portfolio.tsx                       # Portfolio tab navigator (4 tabs)
├── storage.jsx                         # AsyncStorage service (save/load/clear)
└── package.json
```

---

## 💾 Storage Service

All inventory data is persisted locally using a clean `storageService` abstraction in `storage.jsx`:

```js
import { storageService } from './storage';

// Save items
await storageService.saveItems(items);

// Load items
const items = await storageService.loadItems();

// Clear all items
await storageService.clearItems();
```

Data is stored under the key `@inventory_items` via AsyncStorage.

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI environment set up ([guide](https://reactnative.dev/docs/set-up-your-environment))
- Android Studio (for Android) or Xcode (for iOS)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MuhammadAwais053/StockManager.git
   cd StockManager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS only — install pods**
   ```bash
   bundle install
   bundle exec pod install
   ```

4. **Start Metro**
   ```bash
   npm start
   ```

5. **Run the app**

   **Android:**
   ```bash
   npm run android
   ```

   **iOS:**
   ```bash
   npm run ios
   ```

---

## 🔄 Switching Between Inventory & Portfolio Views

The app has two separate navigators:

- `App.tsx` — renders the **Inventory** `HomeScreen` directly
- `Portfolio.tsx` — renders the **Portfolio** tab navigator (Home, Projects, Skills, Contact)

To switch which view loads at startup, update `index.js` to register either `App` or `Portfolio` as the root component.

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Muhammad Awais** — [@MuhammadAwais053](https://github.com/MuhammadAwais053)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
Made with ❤️ using React Native & AsyncStorage
</div>
