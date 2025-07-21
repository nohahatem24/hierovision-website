HieroVision Website - Ancient Egyptian Hieroglyph Recognition
🏺 HieroVision is a modern web application that uses AI to detect, translate, and analyze ancient Egyptian hieroglyphs. Built with React/TypeScript frontend and Flask Python backend with machine learning capabilities.

✨ Features
AI-Powered Hieroglyph Recognition - Upload images and get instant translations
Interactive Landmark Explorer - Discover ancient Egyptian sites and monuments
Personal History - Track your translation journey
Booking System - Book guided tours to historical sites
User Authentication - Secure user accounts and profiles
Responsive Design - Beautiful UI that works on all devices
🚀 Quick Start
Prerequisites
Node.js (v16 or higher) - Download here
Python (v3.8 or higher) - Download here
Git - Download here
Option 1: Automated Setup (Recommended)
Windows:

# Clone the repository
git clone <YOUR_GIT_URL>
cd hierovision-website-main

# Run the automated setup script
start-dev.bat
Linux/macOS:

# Clone the repository  
git clone <YOUR_GIT_URL>
cd hierovision-website-main

# Make script executable and run
chmod +x start-dev.sh
./start-dev.sh
Option 2: Manual Setup
1. Setup Backend (Flask API)
**1. Setup Backend (Flask API)**

bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Place ML models in backend directory:
# - Yolov8m_Best.pt
# - Classification_Model.pt

# Start the backend server
python run.py
2. Setup Frontend (React/Vite)
# In a new terminal, from project root
npm install

# Start the frontend development server
npm run dev
🌐 Access the Application
Frontend: http://localhost:5173
Backend API: http://localhost:5000
API Documentation: http://localhost:5000/health
📁 Project Structure
hierovision-website-main/
├── backend/                 # Flask API backend
│   ├── app/
│   │   ├── models/         # Database models
│   │   ├── routes/         # API route handlers
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   ├── uploads/            # File upload storage
│   ├── requirements.txt    # Python dependencies
│   └── run.py             # Main entry point
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service layer
│   └── lib/               # Utility libraries
├── public/                # Static assets
└── package.json           # Node.js dependencies

🔧 Configuration
Environment Variables
Frontend (.env)
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=HieroVision
Backend (config.py)
Database configuration
JWT secret keys
Upload folder paths
ML model paths
🧠 ML Models
HieroVision uses two main ML models:

YOLOv8 (Yolov8m_Best.pt) - Object detection for hieroglyphs
Classification Model (Classification_Model.pt) - Hieroglyph classification
Note: ML models need to be provided separately due to file size constraints.

🚀 Deployment
Frontend (Vite Build)
npm run build
npm run preview
Backend (Production)
cd backend
gunicorn -w 4 -b 0.0.0.0:5000 run:app

🛠️ Technologies Used

Frontend:

React 18 with TypeScript
Vite for build tooling
Tailwind CSS for styling
shadcn/ui for components
React Query for data fetching
React Router for navigation

Backend:

Flask web framework
SQLAlchemy ORM
JWT authentication
PyTorch for ML inference
OpenCV for image processing
CORS support


📱 Features Overview
Core Features
✅ User authentication (login/signup)
✅ Hieroglyph image upload
✅ AI-powered hieroglyph detection
✅ Translation and analysis
✅ Personal scan history
✅ Landmark exploration
✅ Booking system
✅ User profiles
Pages
Home - Landing page with introduction
Upload - Image upload and analysis
Result - Translation results display
History - Personal scan history
Landmarks - Explore ancient sites
Booking - Book tours and experiences
KidsMode - Fun interactive games for kids
Profile - User account management
About - Project information


🆘 Support
For support and questions:

Check the Issues page
Review the backend README
Consult the setup guide SETUP_GUIDE.md
Made with ❤️ for Ancient Egyptian History Enthusiasts


