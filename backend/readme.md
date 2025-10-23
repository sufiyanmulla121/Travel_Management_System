
# 🗺️ Tourism Management System – Backend

A full-featured **Tourism Management System** backend built using **Node.js**, **Express.js**, and **MongoDB** to handle everything from user authentication to tour bookings and location management.

---

## 📁 Folder Structure

```
backend/
├── src/
│   ├── constants/         # Application-wide constants
│   ├── controller/        # Route controller logic
│   ├── db/                # Database connection and setup
│   ├── helpers/           # Utility/helper functions
│   ├── lib/               # Third-party integrations/utilities
│   ├── middleware/        # Express middleware (auth, error handling, etc.)
│   ├── models/            # Mongoose models/schemas
│   ├── routes/            # API route definitions
│   └── index.js           # App entry point
├── .env                   # Environment variables
├── .env.sample            # Sample env file for development
├── .gitignore             # Git ignored files and folders
├── .prettierignore        # Prettier ignored files
├── .prettierrc            # Prettier configuration
├── eslint.config.mjs      # ESLint configuration
├── package.json           # Project metadata and scripts
└── readme.md              # Project documentation

```

---

## 🚀 Features

- 🔐 JWT-based Authentication & Role Authorization
- 🧳 Tour Package and Place Management
- 📅 Booking System with Personalized Itineraries
- 💳 Secure Payment Handling (Stripe Integration Ready)
- 📝 Customer Reviews & Ratings
- 🖥️ Admin Controls for Users, Places, and Bookings
- 📍 Location-Based Services & Room Listings

---

## 🛠️ Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** (Mongoose ODM)
- **JWT** for Authentication
- **Zod** for Schema Validation
- **Bcrypt** for Password Hashing
- **CORS** for Cross-Origin Resource Sharing

---

## 📦 Prerequisites

- Node.js (v14+)
- MongoDB running locally or via Atlas
- npm or yarn

---

## 🧰 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following:

```env
PORT=your_port_number
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
```

### 4. Run the Server

```bash
# Development
npm run dev

# Production
npm start
```

---

## 📡 API Endpoints

### 👥 Users & Authentication

- `POST /api/users/register` - Register a new user  
- `POST /api/users/login` - Login user  
- `POST /api/users/getAllUsers` - Get all users *(Admin only)*

### 📦 Bookings

- `POST /api/booking/bookplace` - Book a place  
- `POST /api/booking/getBookingsByUserId/:id` - Get bookings by user ID

### ☎️ Contacts

- `GET /api/contacts/getcontacts` - Retrieve contact entries  
- `POST /api/contacts/addcontact` - Submit a contact message

### 📍 Locations

- `GET /api/location/getlocations` - Retrieve all locations  
- `POST /api/location/getAllBookings` - Bookings for a specific location  
- `GET /api/location/addLocation` - Add a location

### 🏨 Places

- `GET /api/place/getallplaces` - Retrieve all places  
- `POST /api/place/getPlaceById/:id` - Get place by ID  
- `GET /api/place/getPlaceByIdFood` - Get food info for a place  
- `GET /api/place/addroom` - Add room to a place

---

## ✅ Response Codes

- `200 OK` – Success  
- `400 Bad Request` – Validation failed  
- `401 Unauthorized` – Authentication required  
- `403 Forbidden` – Permission denied  
- `404 Not Found` – Resource not found  
- `500 Internal Server Error` – Server crash

---

## 🛡️ Security Features

- JWT Authentication with Role-based Access
- Password Hashing using bcrypt
- Schema Validation via Zod
- Enabled CORS for API security

---

