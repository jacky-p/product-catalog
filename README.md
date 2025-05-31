# 🛍️ Nest-mart

A fully responsive e-commerce web application built with React. Users can browse products, view product details, and manage a persistent shopping cart. This project demonstrates a modular architecture, clean UI design, and local state management using React hooks and localStorage.

## 🚀 Features

### 🧭 Core Features
- 🛒 Add to cart and remove from cart functionality
- 💾 Cart state persists across sessions using localStorage
- 📦 Product detail pages with dynamic routing
- 🗂️ Collapsible sidebar housing a product filter for dynamic filtering of products
- 🧱 Modular component structure using CSS Modules
- 🔄 Responsive layout for desktop and mobile

### 🛠 Developer-Focused
- 📁 Modular folder structure for scalability
- 🔃 Client-side routing with react-router-dom
- 🔧 Local state management using useState and custom logic
- ⚙️ Centralized route management for maintainability

## 🧰 Tech Stack & Architecture
- Frontend Framework:
   - Built with **React** using Vite for fast setup and improved dev experience.
- Styling:
  - Implemented with **CSS Modules** to ensure scoped, modular styles per component and avoid global class name conflicts.
- API Integration:
  - Fetched product data using the native **fetch()** API from the provided endpoint, with proper async handling.
- State Management:
  - Used React's **useState** hook for managing local component state.
  - Cart persistence is handled using the **localStorage** API, integrated into App.jsx to make it accessible across the app.
- Component Structure:
```
src/
├── components/   # Reusable UI components with their own .jsx and .module.css files
├── pages/        # Route-based page components (BrowseProduct, ProductDetails, CartPage)
├── App.jsx       # Layout wrapper + global logic (e.g. cartItems, localStorage)
├── main.jsx      # App entry point, sets up router using routes.jsx
└── routes.jsx    # Centralized route definitions
```
- UI Components:
  - Implemented a collapsible sidebar that contains product filters, allowing users to dynamically filter products by category and price range without navigating away from the page.
- Routing:
  - Utilized react-router-dom for client-side routing. Routes are defined declaratively in `routes.jsx` and injected via `main.jsx` using RouterProvider.
- Responsive Design:
  - Ensured mobile-first responsiveness across desktop, tablet, and mobile using CSS media queries.
 
## 💻 Getting Started

To run the app locally:
```
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# Navigate to the project
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev
Requires Node.js and npm to be installed.
```

## 🧪 Assessment Notes

This project was developed as part of a technical assessment. My focus was on:
- Clean, modular component architecture
- Scoped styling with CSS Modules for maintainability
- A responsive layout optimized for different screen sizes
- Effective use of localStorage for cart persistence


## 🔮 Future Improvements

- Polish UI with smoother animations for better UX
- Add more filters (brand, ratings, availability)
- Implement real-time search functionality
- Backend integration for real product data & dynamic data management
- Improve accessibility compliance

  

