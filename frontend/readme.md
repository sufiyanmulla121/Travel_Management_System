# 🌍 Tourism Management System — Frontend

A modern tourism management system frontend built with **React.js** (or Next.js) that allows users to explore, book, and manage tour packages with ease. It seamlessly integrates with the backend API to deliver a smooth and secure travel experience.

---

## ✨ Features

- 🔐 User Authentication & Authorization (JWT)
- 🧳 Browse & Book Tour Packages
- 📁 User Profile Management (view bookings, update profile)
- 💳 Payment Integration (Stripe)
- ⭐ Leave Ratings & Reviews on Tours
- 📌 Save Favorite Tours (Wishlist)
- 🗓️ View and Manage Itineraries
---

## 🛠 Tech Stack

**Frontend:**
- ⚛️ React.js  
- 💅 Bootstrap  
- 🌐 React Router  
- 📦 Axios for API Requests
- 🗂️ State Management:  Context API  

---

## ✅ Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Backend API up and running (check backend setup)

---

## 🚀 Getting Started

1. **Clone the Repository**

```bash
git clone [your-repo-link]
cd frontend

cd frontend
```
2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash

npm run dev
# or
yarn dev
```
4. Environment Variables
Create a .env file in the root directory:

```bash

REACT_APP_BASE_URL=your_api_url
STRIPE_KEY=your stripe key
```
## Project Structure
```
frontend/
├── public/                     # Static assets
├── src/
│   ├── apis/                   # Axios API service wrappers
│   ├── assets/                 # Images, icons, static resources
│   ├── components/             # Reusable UI components
│   ├── context/                # Context providers (e.g., Auth, Booking)
│   ├── data/                   # Static data (JSONs, constants)
│   ├── helpers/                # Utility/helper functions
│   ├── hooks/                  # Custom React hooks
│   ├── routes/                 # Route configuration
│   ├── screens/                # Page-level components (Home, Login, etc.)
│   └── index.js                # App entry point
├── .env                        # Environment config
├── .env.sample                 # Sample for environment variables
├── .gitignore
├── .prettierrc / .prettierignore
├── eslint.config.mjs
├── package.json
└── readme.md
```

## 🔐 Auth Flow
- JWT is stored in HttpOnly cookies or localStorage

- Protected routes redirect unauthorized users to login

- Admin-only routes use role-based access control (RBAC)

## 🧠 Advanced Functionalities
- 📝 Dynamic Itinerary Builder: Let users customize day-by-day plans

- ❤️ Wishlist: Save places/tours to favorite for future bookings

- 📈 Admin Analytics: Tour performance, revenue, booking stats

- 🔄 Review Moderation: Admin can approve/delete inappropriate reviews

- 🔔 Email & In-App Notifications: Booking confirmation, itinerary changes