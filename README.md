# Interview AI Backend

A Node.js/Express backend API for an AI-powered interview preparation platform. This backend handles user authentication, resume processing, AI-powered interview report generation, and PDF resume creation.

## Features

- **User Authentication**: JWT-based auth with register, login, logout
- **Resume Processing**: PDF parsing and analysis
- **AI Integration**: Google Gemini API for generating interview reports
- **Interview Reports**: Generates technical questions, behavioral questions, skill gaps, and preparation roadmaps
- **PDF Generation**: Creates tailored resumes using Puppeteer
- **MongoDB Database**: Stores user data and interview reports

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Google Gemini AI (@google/genai)
- Puppeteer (PDF generation)
- Multer (file uploads)
- bcryptjs (password hashing)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hazel-Singla/Interview-Ai-Backend.git
cd Interview-Ai-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
```

4. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/me` | Get current user details |

### Interview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/interview/generate` | Generate interview report |
| GET | `/api/interview/reports` | Get all user reports |
| GET | `/api/interview/report/:interviewId` | Get specific report |
| GET | `/api/interview/resume-pdf/:interviewReportId` | Download resume PDF |

## Project Structure

```
src/
├── config/
│   └── database.js       # MongoDB connection setup
├── controllers/
│   ├── auth.controller.js    # Authentication logic
│   └── interview.controller.js   # Interview report logic
├── middlewares/
│   ├── auth.middleware.js    # JWT verification
│   └── file.middleware.js    # File upload handling
├── models/
│   ├── blacklist.model.js    # Token blacklist
│   ├── interviewReport.model.js  # Interview reports
│   └── user.model.js         # User schema
├── routes/
│   ├── auth.routes.js        # Auth routes
│   └── interview.routes.js   # Interview routes
└── services/
    └── ai.service.js         # Google Gemini AI integration
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `GOOGLE_GENAI_API_KEY` | Google Gemini API key |

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Frontend Repository

This backend connects to the Interview AI Frontend. Make sure to set up and run the frontend for full functionality.

- Frontend Repo: https://github.com/Hazel-Singla/Interview-Ai-Frontend

## License

ISC