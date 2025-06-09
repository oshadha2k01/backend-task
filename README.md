# Backend Assignment REST API

A Node.js + Express REST API for user registration/login and product CRUD operations, using MongoDB and secure password hashing.

## Features

- User registration and login (with hashed passwords, no authentication middleware)
- Product CRUD: Create, Read, Update, Delete
- MongoDB for data storage
- Clean code structure for easy extension

## Requirements

- Node.js (v16+ recommended)
- MongoDB (local or cloud, e.g. MongoDB Atlas)

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/oshadha2k01/backend-task.git
   cd backend-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```



## Next Steps / Improvements

- Add authentication (JWT or sessions)
- Add user roles (admin, user)
- Add product image upload
- Add request validation and better error handling
- Write unit and integration tests

## License

MIT

