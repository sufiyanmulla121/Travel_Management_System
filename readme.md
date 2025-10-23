# 🌐 Tourism Management System

A full-stack Tourism Management System that enables users to explore, book, and manage tour packages with secure authentication, payment processing, and a powerful admin dashboard. The project is divided into **frontend** and **backend** folders for clear separation of concerns.

---

## 🧩 Project Structure

```
tourism-management-system/
├── frontend/    # React.js or Next.js frontend application
├── backend/     # Node.js + Express + MongoDB REST API
├── .gitignore   # Files to ignore while pushing code
└── README.md    # Root project overview
```

---

## 🚀 Features

### 🌍 User Side

- User Registration and Login (JWT Auth)
- Browse Tour Packages by Location or Type
- Book Tours with Integrated Payments (Stripe)
- View & Manage Bookings and Itineraries

### 🛠️ Admin Side

- Admin Dashboard
- Manage Users, Tours, Locations, Bookings
- Access Analytics and Reports
- Approve or Remove Reviews

---

## ⚙️ Tech Stack

### Frontend

- React.js
- Bootstrap
- Zustand
- Axios for API calls

### Backend

- Node.js + Express.js
- MongoDB + Mongoose
- JWT for Authentication
- Zod for Request Validation
- Stripe for Payments

---

## 📦 Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MongoDB running locally or Atlas
- Stripe account for payment testing

---

## 📂 Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd tourism-management-system
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create .env file
PORT=your_port_number
DATABASE_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
# Create .env file
REACT_APP_BASE_URL=http://localhost:5000
STRIPE_KEY=your_stripe_public_key
npm run dev
```

---

## 🛡️ Security

- JWT-based Authentication
- Input Validation with Zod
- CORS Configured
- Password Hashing with Bcrypt

---
