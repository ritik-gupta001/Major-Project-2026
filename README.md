# 🏥 VitaScan AI

**Advanced AI-Powered Medical Report Analysis Platform**

A comprehensive medical document analysis system that leverages OpenAI GPT-4o-mini and advanced AI to transform medical reports into actionable insights. Features dynamic risk calculation, hospital-grade animations, and a beautiful teal-themed interface.

![VitaScan AI](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-green?logo=fastapi)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-purple?logo=openai)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Key Features

### 🎯 **Core Functionality**
- **📄 PDF Analysis**: Upload medical reports for comprehensive AI analysis with OpenAI GPT-4o-mini integration
- **🧠 Dynamic Risk Assessment**: Real AI-calculated risk percentages based on medical content
- **📊 Interactive Visualizations**: Real-time charts, gauges, and medical insights with Plotly & Recharts
- **🌙 Dark/Light Mode**: Complete theme system with user preference persistence
- **📥 Download Reports**: Export analysis in PDF, TXT, and JSON formats
- **💬 AI Medical Chat**: Interactive medical assistant powered by OpenAI for health questions
- **⚡ Optimized Performance**: Fast analysis with intelligent timeout handling and error recovery

### 🎨 **Professional Interface**
- **🏥 Hospital Logo**: Professional medical cross logo with heartbeat animations
- **🖥️ Modern Teal UI**: Beautiful medical-grade interface with custom teal color scheme (#14b8a6)
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **✨ Hospital-Level Animations**: Smooth pulse, float, heartbeat, and medical scan effects
- **🎯 Intuitive Navigation**: User-friendly drag-and-drop upload and analysis workflow

### 🤖 **AI Intelligence**
- **OpenAI GPT-4o-mini**: Latest AI model optimized for medical document analysis
- **LangChain Integration**: Advanced LLM orchestration for complex medical reasoning
- **Dynamic Risk Calculation**: Real-time percentage calculation based on content analysis
- **Vector Storage**: ChromaDB & FAISS for intelligent medical knowledge retrieval
- **Intelligent Fallbacks**: Robust error handling with backup rule-based analysis systems
- **Medical Knowledge Base**: Comprehensive medical guidelines and reference data

### 📋 **Professional Medical Reports**
- **🏥 SOAP Format Reports**: Doctor-style assessments (Subjective, Objective, Assessment, Plan)
- **👥 Patient-Friendly Explanations**: Clear, easy-to-understand health summaries
- **🎨 7-Level Color Coding**: Critical to Optimal severity visualization (red to emerald)
- **🩺 Intelligent Medical Icons**: Smart categorization (cardiovascular, neurological, respiratory, etc.)
- **📥 Professional PDF Export**: Print-ready medical reports with full SOAP documentation
- **🔍 Visual Enhancement**: Color-coded findings with 2px borders and severity badges

---

## 🚀 Quick Start Guide

### Prerequisites
- **Python 3.8+**
- **Node.js 14+** and **npm**
- **OpenAI API Key** (for AI features)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ritik-gupta001/Major-Project-2026.git
cd Major-Project-2026
```

### 2️⃣ Backend Setup

**Create and activate virtual environment:**
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows PowerShell:
.\venv\Scripts\Activate.ps1

# Windows CMD:
venv\Scripts\activate.bat

# macOS/Linux:
source venv/bin/activate
```

**Install Python dependencies:**
```bash
pip install -r requirements.txt
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
cd ..
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the project root:
```env
OPENAI_API_KEY=your-openai-api-key-here
```

### 5️⃣ Run the Application

**Option A: Simple Start (Recommended)**

Open **two separate terminals**:

**Terminal 1 - Backend:**
```powershell
# Windows PowerShell
.\venv\Scripts\Activate.ps1
python app.py
```

```bash
# macOS/Linux
source venv/bin/activate
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

**Option B: Production Mode**
```bash
# Backend with uvicorn
.\venv\Scripts\Activate.ps1
python -m uvicorn app:app --reload --host 0.0.0.0 --port 8000

# Frontend production build
cd frontend
npm run build
```

### 6️⃣ Access the Application

Once both servers are running:
- **🌐 Frontend UI**: http://localhost:3000
- **⚙️ Backend API**: http://localhost:8000
- **📚 API Docs**: http://localhost:8000/docs

---

## 📖 Usage

1. **Upload Medical Document**: Drag & drop or click to upload PDF/image files
2. **Choose Analysis Mode**: 
   - 🤖 AI-Powered Analysis (requires OpenAI API key)
   - 🔧 Rule-Based Analysis (always available)
3. **View Results**: Interactive dashboard with charts and insights
4. **Chat with AI**: Ask questions about your medical report
5. **Download Report**: Export in PDF, TXT, or JSON format

---

## 🛠️ Technology Stack

### Backend
- **FastAPI**: High-performance Python web framework
- **LangChain**: AI/LLM orchestration
- **OpenAI GPT-4o-mini**: Medical document analysis
- **PyPDF2**: PDF processing
- **ChromaDB & FAISS**: Vector storage

### Frontend
- **React 18**: Modern UI framework
- **Tailwind CSS**: Utility-first styling
- **Plotly.js & Recharts**: Data visualization
- **Lucide React**: Beautiful icons
- **Axios**: HTTP client

---

## 📁 Project Structure

```
VitaScan AI/
├── app.py                      # FastAPI backend server
├── intelligent_analyzer.py     # Rule-based medical analyzer
├── llm_analyzer.py            # AI-powered LLM analyzer
├── requirements.txt           # Python dependencies
├── .env                       # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── contexts/          # Theme & state management
│   │   ├── services/          # API services
│   │   └── utils/             # Utility functions
│   ├── public/                # Static assets
│   └── package.json           # Node dependencies
└── README.md                  # This file
```

---

## 🔧 Development

### Backend Development
```bash
# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Run with auto-reload
python app.py
# or
uvicorn app:app --reload --port 8000
```

### Frontend Development
```bash
cd frontend
npm start  # Runs on port 3000 with hot reload
```

### Build for Production
```bash
cd frontend
npm run build  # Creates optimized production build
```

---

## 🎨 Design Features

### Hospital-Grade Animations
- ✨ **Floating Elements**: Smooth vertical floating motion
- 💓 **Heartbeat Pulse**: Medical-grade heartbeat effects on logo
- 🔄 **Smooth Transitions**: Seamless theme switching and page transitions
- 📊 **Animated Visualizations**: Real-time data updates with smooth animations
- 🏥 **Medical Scan Effect**: Hospital equipment-inspired scan animations
- ✨ **Shimmer Effects**: Professional loading and highlight effects

### Teal Color Theme
- **Primary Teal**: `#14b8a6` - Modern medical aesthetic
- **Dark Teal**: `#0d9488` - Professional accents
- **Full Spectrum**: 50-900 shade range for versatile UI
- **Dark/Light Mode**: Automatic theme persistence with smooth transitions
- **Accessible**: WCAG compliant color contrast ratios

### Component Features
- 🏥 **Hospital Logo**: Animated medical cross with heartbeat indicator
- 📤 **Drag & Drop Upload**: Intuitive file upload with visual feedback
- 📊 **Risk Gauge**: Real-time risk assessment with color-coded indicators
- 📈 **Vital Charts**: Interactive medical data visualization
- 💬 **AI Chat**: Conversational medical assistant interface
- 📥 **Multi-format Export**: PDF, TXT, and JSON report downloads

---

## 📁 Project Structure

```
VitaScan AI/
├── 📄 README.md                    # Project documentation  
├── 🐍 app.py                       # FastAPI backend server
├── 🧠 intelligent_analyzer.py      # Core AI analysis engine
├── 🤖 llm_analyzer.py              # OpenAI GPT integration
├── 📦 requirements.txt             # Python dependencies
├── 🔐 .env                         # Environment variables
├── 🌐 frontend/                    # React frontend application
│   ├── 📦 package.json             # Node.js dependencies
│   ├── 🎨 tailwind.config.js       # Tailwind CSS configuration
│   ├── 🌐 public/
│   │   └── 📄 index.html           # HTML template
│   └── 💻 src/
│       ├── 🎯 App.js               # Main application component
│       ├── 🎨 index.css            # Global styles with theme support
│       ├── 🚀 index.js             # Application entry point
│       ├── 🧩 components/          # React components
│       │   ├── 📊 Dashboard.js            # Main dashboard with theme toggle
│       │   ├── 💬 AIChatInterface.js      # AI chat interface
│       │   ├── 📤 FileUpload.js           # File upload component
│       │   ├── 🏥 MedicalIcons.js         # Professional medical icons
│       │   ├── 🏥 MedicalReportPDF.js     # SOAP report generation & export
│       │   ├── 👤 PatientSummary.js       # Patient insights with color coding
│       │   ├── ⚠️ RiskGauge.js             # Dynamic risk visualization
│       │   ├── 📈 VitalCharts.js          # Interactive vital charts
│       │   ├── 🌙 ThemeToggle.js          # Dark/Light mode toggle
│       │   ├── 📥 DownloadReport.js       # Multi-format download
│       │   └── 🎨 ThemedUploadView.js     # Theme-aware upload interface
│       ├── 🎨 contexts/            # React contexts
│       │   └── 🌈 ThemeContext.js         # Theme management context
│       ├── 🔧 services/
│       │   └── 🌐 api.js                  # API service layer
│       ├── 🧪 tests/
│       │   └── ⚡ App.test.js            # Unit tests
│       └── 🛠️ utils/
└── 🐍 venv/                        # Python virtual environment
```

## 🛠️ Technology Stack

### Backend
- **🐍 FastAPI**: Modern, fast web framework for building APIs
- **🤖 OpenAI GPT-4o-mini**: Latest AI model for medical text analysis
- **📊 pandas**: Data manipulation and analysis
- **📈 numpy**: Numerical computing for healthcare data
- **📄 PyPDF2**: PDF processing for medical documents
- **🔐 python-dotenv**: Environment variable management

### Frontend
- **⚛️ React 18**: Modern JavaScript library with hooks and context
- **📊 Recharts**: Interactive charting library for medical visualizations
- **⭕ React-Circular-Progressbar**: Dynamic risk assessment gauges
- **🎨 Tailwind CSS**: Utility-first CSS framework with theme support
- **📋 HTML2Canvas + jsPDF**: Client-side PDF generation for reports
- **🌐 Axios**: HTTP client for API communication

### AI/ML Features
- **🧠 OpenAI Integration**: GPT-4o-mini for advanced medical analysis
- **📊 Dynamic Risk Assessment**: AI-calculated risk percentages
- **🎯 Intelligent Analysis**: Context-aware medical document understanding
- **� Pattern Recognition**: Health trend analysis and visualization

### New Features
- **� Theme System**: Complete dark/light mode with localStorage persistence
- **📥 Multi-format Downloads**: PDF, TXT, and JSON report exports
- **⚡ Performance Optimization**: Improved timeout handling and user experience
- **� Dynamic Updates**: Real-time risk calculation without hardcoded values

## 🩺 Medical Features

### 📋 **Analysis Capabilities**
- **Laboratory Results**: Comprehensive lab value interpretation
- **Vital Signs**: Blood pressure, heart rate, temperature analysis
- **Medical History**: Chronic condition and medication tracking
- **Risk Factors**: Cardiovascular, diabetic, and metabolic risk assessment

### 🎯 **AI Intelligence**
- **Confidence Scoring**: AI prediction reliability metrics
- **Clinical Correlation**: Cross-referenced medical knowledge base
- **Personalized Recommendations**: Tailored healthcare guidance
- **Monitoring Protocols**: Structured follow-up plans

### 📊 **Visualization Types**
- **Line Charts**: Vital sign trends over time
- **Area Charts**: Cholesterol and lipid profiles
- **Bar Charts**: Blood sugar and glucose monitoring
- **Pie Charts**: Health metric distributions
- **Risk Gauges**: Circular risk assessment indicators

## 🔧 API Documentation

### Core Endpoints

#### `POST /analyze`
Upload and analyze medical PDF documents
```json
{
  "file": "medical_report.pdf"
}
```

#### `GET /demo`
Load demonstration medical analysis
```json
{
  "analysis": {
    "patient_summary": {...},
    "doctor_summary": {...},
    "risk_assessment": {...}
  }
}
```

#### `GET /health`
Health check endpoint
```json
{
  "status": "healthy",
  "timestamp": "2025-09-27T00:00:00Z"
}
```

## 🎨 UI Components

###  **Dashboard Components**
- **Sidebar Navigation**: Upload, History, Dashboard tabs
- **Content Panels**: Expandable sections for different insights
- **Medical Icons**: Professional healthcare iconography
- **Risk Gauges**: Circular progress risk visualization

###  **Chart Components**
- **VitalCharts**: Interactive medical trend visualization
- **RiskGauge**: Circular progress risk assessment
- **Medical Timeline**: Health event tracking
- **Condition Cards**: Medical condition summaries

##  Security & Privacy

- ** HIPAA Considerations**: Healthcare data privacy compliance ready
- ** Data Encryption**: Secure data transmission and storage
- ** Access Control**: Role-based permissions system ready
- ** Session Management**: Secure user session handling

## 🚀 Local Development

```bash
# Backend
python app.py

# Frontend
cd frontend && npm start
```

## ☁️ Free Deployment (No Oracle)

This project can be deployed for free using:

- **Backend**: Render (Free Web Service)
- **Frontend**: Netlify (Free Starter Plan)

### Backend on Render

1. Push code to GitHub.
2. In Render, create a new **Web Service** from this repo.
3. Configure:
  - **Root Directory**: `.`
  - **Build Command**: `pip install -r requirements.txt`
  - **Start Command**: `python -m uvicorn app:app --host 0.0.0.0 --port $PORT`
4. Add environment variable:
  - `OPENAI_API_KEY=your-key`
5. Deploy and copy the backend URL.

### Frontend on Netlify

1. In Netlify, create a new site from your GitHub repository.
2. Configure build settings:
  - **Base directory**: `frontend`
  - **Build command**: `npm run build`
  - **Publish directory**: `build`
3. Add environment variable:
  - `REACT_APP_API_URL=https://your-render-backend-url.onrender.com`
4. Deploy.

### Notes

- Render free tier may sleep when inactive.
- If backend URL changes, update `REACT_APP_API_URL` and redeploy frontend.
- `frontend/netlify.toml` and `frontend/public/_redirects` are already included for SPA routing.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Ritik Gupta**
- GitHub: [@ritik-gupta001](https://github.com/ritik-gupta001)

## 🙏 Acknowledgments

- OpenAI for GPT-4o-mini API
- React and FastAPI communities
- Medical data visualization libraries

---

**⚠️ Disclaimer**: This tool is for informational purposes only and should not replace professional medical advice. Always consult with healthcare professionals for medical decisions.

### E2E Testing
```bash
npm run test:e2e
```

## 🗺️ Roadmap

### ✅ **Phase 1: Foundation** (Completed)
- [x] PDF document processing and text extraction
- [x] OpenAI GPT-4o-mini integration
- [x] React frontend with professional UI
- [x] FastAPI backend with comprehensive endpoints

### ✅ **Phase 2: Core Features** (Completed)
- [x] Dynamic AI risk calculation (fixed 85% hallucination issue)
- [x] Interactive medical visualizations  
- [x] Professional medical icons and interface
- [x] Real-time analysis with proper error handling

### ✅ **Phase 3: Advanced Features** (Completed)
- [x] 🌙 Dark/Light mode theme system with persistence
- [x] 📥 Multi-format report downloads (PDF, TXT, JSON)
- [x] ⚡ Performance optimization and timeout improvements
- [x] 🧹 Code cleanup and component optimization
- [x] 🏥 Professional SOAP medical reports with AI generation
- [x] 👥 Patient-friendly health explanations
- [x] 🎨 7-level color coding system (Critical to Optimal)
- [x] 🩺 Intelligent medical icon categorization system

### 🔄 **Phase 4: Enhancements** (In Progress)
- [ ] 📱 Enhanced mobile responsiveness
- [ ] 🔔 Smart alerts and notifications
- [ ] 💊 Advanced medication interpretation
- [ ] 🌍 Multi-language support

### 🎯 **Phase 5: Production** (Planned)
- [ ] ☁️ Advanced scaling and optimization
- [ ] 🔐 Enhanced security and HIPAA compliance
- [ ] 🏥 Healthcare system integrations
- [ ] 📊 Advanced analytics dashboard

### 🚀 **Recent Achievements**
- **Fixed Risk Hallucination**: Eliminated hardcoded 85% risk values with dynamic AI calculation
- **Theme System**: Complete dark/light mode with user preference persistence  
- **Download Functionality**: Professional report generation in multiple formats
- **Performance Optimization**: Improved analysis speed and reliability
- **Clean Architecture**: Removed unused components and optimized codebase

## 🔧 Recent Improvements

### 🎯 **Major Bug Fixes**
- **Fixed 85% Risk Hallucination**: The application was showing hardcoded 85% risk values regardless of actual content. Now features dynamic AI-calculated percentages that vary realistically (e.g., 68-78% for high risk, 10-15% for low risk)
- **Enhanced OpenAI Integration**: Improved prompts to specifically request percentage calculations from GPT-4o-mini
- **Performance Optimization**: Increased API timeouts and optimized analysis speed

### 🌟 **New Features**
- **🌙 Complete Theme System**: Dark/light mode toggle with localStorage persistence and system preference detection
- **📥 Multi-format Downloads**: Professional report generation in PDF/HTML, TXT, and JSON formats
- **🏥 SOAP Medical Reports**: Professional doctor-style assessment format with AI-generated content
- **👥 Patient Explanations**: Clear, comprehensive health summaries in plain language
- **🎨 Enhanced Color Coding**: 7-level severity system from Critical (red) to Optimal (emerald)
- **🩺 Smart Medical Icons**: Intelligent categorization with 6+ medical icon types
- **🎨 Enhanced UI**: Theme-aware components with smooth transitions and professional styling
- **🧹 Code Cleanup**: Removed unused components (SHAPVisualization, DoctorSummary) and optimized project structure

### ⚡ **Performance Enhancements**
- **Faster Analysis**: Optimized OpenAI API calls with proper timeout handling
- **Better Error Handling**: Robust fallback systems for AI analysis
- **Cleaner Codebase**: Removed unnecessary files and improved project organization
- **Responsive Design**: Better mobile and desktop compatibility

## 🎯 How to Use New Features

### 🌙 Theme Toggle
- Look for the 🌙/☀️ button in the interface
- Toggle between dark and light modes
- Preference is automatically saved and restored

### 📥 Download Reports  
- After analysis, find the download button
- Choose from PDF, TXT, or JSON formats
- Reports include patient info, analysis, and recommendations

### 🏥 Professional Medical Reports
- Click "Generate & Download Report" after analysis
- Get SOAP format reports (Subjective, Objective, Assessment, Plan)
- View patient-friendly explanations alongside clinical assessments
- See color-coded severity indicators and medical icons
- Download as print-ready HTML/PDF with full documentation

### ⚡ Dynamic Risk Assessment
- Upload any medical PDF
- See realistic risk percentages based on actual content
- Risk values now vary appropriately instead of showing constant 85%

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Support & Contact

- **Email**: rg409239@gmail.com
- **GitHub**: [@ritik-gupta001](https://github.com/ritik-gupta001)
- **Issues**: [GitHub Issues](https://github.com/ritik-gupta001/Major-Project-2026/issues)

---

## 🙏 Acknowledgments

- **OpenAI**: For providing powerful GPT-4o-mini API for medical analysis
- **React & FastAPI Communities**: For amazing frameworks and support
- **Healthcare Professionals**: For domain expertise and feedback
- **Open Source Community**: For the incredible libraries and tools

---

## ⚠️ Medical Disclaimer

**Important**: VitaScan AI is designed as an assistive tool for healthcare professionals and is **not a substitute** for professional medical advice, diagnosis, or treatment. 

- Always consult with qualified healthcare providers for medical decisions
- The AI analysis should be used in conjunction with, not as a replacement for, professional medical judgment
- This tool is for informational and educational purposes only
- Not intended for use in clinical diagnosis or treatment planning without physician oversight

---

<div align="center">

### 🏥 VitaScan AI - Transforming Healthcare Through Intelligent AI Analysis

![Healthcare](https://img.shields.io/badge/Healthcare-Innovation-brightgreen?style=for-the-badge&logo=medical-cross)
![AI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=for-the-badge&logo=openai)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?style=for-the-badge&logo=fastapi)

**✨ Now with Hospital-Grade Animations, Teal Theme & Enhanced AI Analysis ✨**

*Made with ❤️ by Ritik Gupta*

[⭐ Star this repo](https://github.com/ritik-gupta001/Major-Project-2026) | [🐛 Report Bug](https://github.com/ritik-gupta001/Major-Project-2026/issues) | [💡 Request Feature](https://github.com/ritik-gupta001/Major-Project-2026/issues)

</div>
