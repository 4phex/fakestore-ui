# 🛍️ FakeStore UI

A responsive e-commerce frontend built with **Vite**, **React**, **Mantine**, **Zustand**, and **React Router**. Connects to the [Fake Store API](https://fakestoreapi.com/) to fetch and display products, manage authentication, and simulate checkout.

## 📋 Table of Contents

- 🔧 Tech Stack
- 📁 Project Structure
- 🚀 Running the Application
- 🔐 Features
- 🧪 Testing (Coming Soon)
- 📦 API Reference

---

## 🔧 Tech Stack

- ⚛️ **React** (with Vite)
- 🎨 **Mantine** for UI components & styling
- 🧠 **Zustand** for global state management
- 🧭 **React Router** for routing
- 🌐 **FakeStore API** as mock backend

---

## 📁 Project Structure
```
src/
├── api/
│   ├── auth.ts
│   └── products.ts
├── components/
│   ├── OrderConfirmation/
│   │   └── OrderSuccessMessage.tsx
│   ├── Products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductImage.tsx
│   │   └── ProductInfo.tsx
│   ├── Profile/
│   │   ├── ProfileCard.tsx
│   │   └── ProfileField.tsx
│   ├── Layout.tsx
│   └── LoginForm.tsx
├── hooks/
│   ├── useLogin.ts
│   └── useProducts.ts
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── OrderConfirmationPage.tsx
│   ├── ProductPage.tsx
│   └── ProfilePage.tsx
├── stores/
│   ├── productStore.tsx
│   └── userStore.tsx
├── utils/
│   └── formatters.tsx
├── App.tsx
├── main.tsx
├── theme.ts
├── vite-env.d.ts
└── .gitignore
```

## 🚀 Running the Application

> **Compatible Node Versions:** Recommended Node.js versions are **20.x** and **22.x**.
> If you're using [nvm](https://github.com/nvm-sh/nvm), you can run `nvm use` to automatically switch to the correct version (based on the included `.nvmrc` file).

### 1. Clone the repo
```bash
git clone https://github.com/your-username/fakestore-ui.git
cd fakestore-ui
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```

Visit http://localhost:5173 to view the app.

## 🔐 Features

- 🛒 Product search, detail, and simulated checkout
- 🔐 Simple login with FakeStore API
- 📦 State management using Zustand
- 🌙 Theming with Mantine
- ✅ Protected routes (e.g., Profile, Checkout)
- 🧪 Scalable and modular folder structure

## 🧪 Testing (Coming Soon)

Planned integration with Vitest and React Testing Library

## 📦 API Reference

All data is fetched from https://fakestoreapi.com.
