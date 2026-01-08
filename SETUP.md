# Setup Guide

## Backend Setup

1. **Navigate to server directory and install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Create `.env` file in the root directory** (same level as `package.json`):
   - Copy the example below and paste your MongoDB Compass connection string:
   ```
   MONGODB_URI=your-mongodb-connection-string-here
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   NODE_ENV=development
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

## Frontend Setup

The frontend dependencies are already installed. Just run:
```bash
npm start
```

## MongoDB Connection String Format

Your MongoDB connection string should look like:
```
mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

Or for local MongoDB:
```
mongodb://localhost:27017/certificate-verification
```

## Running Both Servers

1. **Terminal 1 - Backend:**
   ```bash
   cd server
   npm start
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000` and backend on `http://localhost:5000`.
