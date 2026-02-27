# AI URL Platform (Linkly)

A comprehensive, full-stack URL shortening and link management platform designed for scale and developer experience. Linkly provides real-time link redirection, click analytics, QR code generation, AI-powered link categorization, and subscription billing.

## Project Structure

```
AI_URL_PLATFORM/
├── backend/                  # Express.js REST API & background workers
│   ├── src/
│   │   ├── controllers/      # Auth, collections, redirects, subscriptions, payments
│   │   ├── db/               # MongoDB and Redis connection managers
│   │   ├── jobs/             # BullMQ queues and asynchronous analytics workers
│   │   ├── middleware/       # JWT auth and rate limiting middleware
│   │   ├── models/           # Mongoose schemas (User, Link, Collection)
│   │   ├── routers/          # Express route definitions
│   │   ├── services/         # AI categorization & system collection services
│   │   └── utilities/        # ApiError, ApiResponse, asyncHandler
│   ├── package.json
│   └── README.md
├── frontend/                 # React SPA with Tailwind CSS
│   ├── public/               # Public assets and HTML entry
│   ├── src/
│   │   ├── api/              # Axios client configuration and interceptors
│   │   ├── components/       # UI components, modals, dark mode toggle
│   │   ├── hooks/            # Custom React hooks (useDashboard)
│   │   ├── Pages/            # Route views (Home, Dashboard, Login, Signup, Subscription)
│   │   ├── App.js            # App routing
│   │   └── index.js          # React DOM mount point
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
├── .gitignore                # Root gitignore
└── README.md                 # Project documentation
```

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Caching & Rate Limiting**: Redis, ioredis, express-rate-limit
- **Job Processing**: BullMQ for asynchronous click metric tracking
- **AI Integration**: Google Generative AI (Gemini) for link categorization
- **Authentication**: JWT (JSON Web Tokens) with bcrypt password hashing
- **Payments**: PhonePe / Payment gateway integration

### Frontend
- **Framework**: React 18
- **Styling**: Tailwind CSS, CSS3
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios with interceptors
- **Visuals & Utilities**: React Icons, QR Code generation, Dark Mode support

## Key Features

- **High-Performance Redirection**: Low-latency link routing with Redis caching.
- **Analytics & Tracking**: Asynchronous event ingestion via BullMQ to record click counts and timestamps without blocking redirects.
- **AI Categorization**: Automatic tagging and grouping of bookmarked links using Gemini AI.
- **Collections Management**: Organize links into custom collections with bulk operations.
- **Security & Rate Limiting**: Token-based authentication, password hashing, and IP-level rate limiting.
- **QR Code Generation**: Instantly generate scannable QR codes for shortened links.
- **Tiered Subscriptions**: Free and Premium membership management.

## Environment Setup

### Backend (.env)
Create a `.env` file in the `backend/` directory:
```env
PORT=8000
NODE_ENV=development
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/linkly
JWT_KEY=your_jwt_secret_key
SESSION_SECRET=your_session_secret
REACT_APP_FRONTEND_URL=http://localhost:3000
REACT_APP_BACKEND_URL=http://localhost:8000
REDIS_URL=redis://localhost:6379
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend (.env)
Create a `.env` file in the `frontend/` directory:
```env
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_FRONTEND_URL=http://localhost:3000
REACT_APP_TIMEOUT=10000
```

## Running the Application

### 1. Backend Service
```bash
cd backend
npm install
npm run dev
```

To run background analytics worker:
```bash
cd backend
npm run worker
```

### 2. Frontend Application
```bash
cd frontend
npm install
npm start
```

## License
ISC
