# Premium Shoe Store E-commerce

A full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Storefront**: Responsive, minimal design inspired by top sports brands.
- **Products**: Browse, filter by brand, and view product details.
- **Cart**: Add/remove items, quantity control.
- **Checkout**: Shipping address entry and Razorpay payment integration (Test Mode).
- **Authentication**: User registration and login with JWT.
- **Profile**: Order history and status tracking.
- **Admin**: Dashboard to manage products and view all orders.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Context API.
- **Backend**: Node.js, Express, MongoDB, Mongoose.
- **Payments**: Razorpay.

## Setup Instructions

### Prerequisites
- Node.js installed.
- MongoDB installed and running locally on port 27017.

### Installation

1.  **Clone/Open the repository.**
2.  **Install Dependencies:**

    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

3.  **Environment Variables:**
    - The backend comes with a pre-configured `.env` file using local MongoDB and test keys.
    - `MONGO_URI=mongodb://127.0.0.1:27017/shoestore`
    - `JWT_SECRET=secret`

4.  **Seed Database (Optional):**
    Populate the database with sample products and users.
    ```bash
    # From root directory
    npm run data:import --prefix backend
    # OR
    cd backend
    node seeder.js
    ```
    *Note: Admin user is `admin@example.com` / `password123`*

### Running the App

You can run the backend and frontend separately, or use the provided script.

**Option 1: Using the script**
```bash
chmod +x run.sh
./run.sh
```

**Option 2: Manually**
- **Backend**:
  ```bash
  cd backend
  npm run dev
  ```
- **Frontend**:
  ```bash
  cd frontend
  npm run dev
  ```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Accounts

- **Admin**: `admin@example.com` / `password123`
- **User**: Register a new account or use `john@example.com` / `password123` (if seeded)
