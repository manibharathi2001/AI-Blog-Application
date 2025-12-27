# AI Blog Application 🚀

An AI-powered blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). This application features automated blog content generation using Google Gemini AI, seamless image management with ImageKit, and a robust admin dashboard for managing content.

## ✨ Features

- **AI Content Generation**: Leverage Google Gemini to generate professional blog posts instantly.
- **Admin Dashboard**: Comprehensive stats (Blogs, Comments, Drafts) and recent activity monitoring.
- **Blog Management**: Add, update, delete, and toggle publish status for blogs.
- **Comment System**: Real-time comments with an admin approval workflow.
- **Responsive UI**: Modern, fast, and fully responsive design across all devices.
- **Security**: JWT-based authentication for admin operations and secure API handling.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Motion, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **AI Integration**: Google Generative AI (Gemini)
- **Image Handling**: ImageKit.io
- **Deployment**: Vercel

## ⚙️ Environment Variables

### Backend (`/server/.env`)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLICKEY=your_public_key
IMAGEKIT_PRIVATEKEY=your_private_key
IMAGEKIT_URLENDPOINT=your_endpoint_url
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend (`/client/.env`)
```env
VITE_BACKEND_URL=http://localhost:3000
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/manibharathi2001/AI-Blog-Application.git
cd AI-Blog-Application
```

### 2. Setup Backend
```bash
cd server
npm install
npm run server  # Start with node
# OR
npm start       # Start with nodemon
```

### 3. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

## 🌍 Deployment on Vercel

1. **Deploy Backend**: 
   - Root directory: `server/`
   - Add all backend environment variables in Vercel settings.
2. **Deploy Frontend**:
   - Root directory: `client/`
   - Add `VITE_BACKEND_URL` pointing to your deployed backend.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ by [Mani Bharathi](https://github.com/manibharathi2001)
