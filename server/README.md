# Certificate Verification System - Backend

This is the backend server for the Certificate Verification System.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment Variables**
   - Create a `.env` file in the root directory (not in the server folder)
   - Add your MongoDB connection string:
     ```
     MONGODB_URI=your-mongodb-connection-string-here
     JWT_SECRET=your-secret-key-here
     PORT=5000
     NODE_ENV=development
     ```

3. **Start the Server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
  - Body: `{ name, email, password }`
  - Returns: `{ success, token, user }`

- **POST** `/api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ success, token, user }`

- **GET** `/api/auth/me` - Get current user (requires token in Authorization header)
  - Header: `Authorization: Bearer <token>`
  - Returns: `{ success, user }`

### Health Check

- **GET** `/api/health` - Check if server is running
  - Returns: `{ status: 'OK', message: 'Server is running' }`

## MongoDB Connection

Paste your MongoDB Compass connection string in the `.env` file as `MONGODB_URI`.

Example format:
```
mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```
