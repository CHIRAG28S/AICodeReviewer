# 🤖AI Code Reviewer

## 💡Overview
AI Code Reviewer is a web-based application that allows users to write or paste their code and receive AI-generated reviews and suggestions. The application utilizes Google's Gemini API for AI-powered code analysis. The frontend is built with React and Tailwind CSS, while the backend is powered by Node.js and Express.

## 🚀Features
- **Code Editor**: Users can write or paste code in a syntax-highlighted editor.
- **AI-Powered Review**: The application uses Gemini's API to analyze and provide feedback on the code.
- **Responsive UI**: Designed with Tailwind CSS for a seamless experience across devices.
- **Real-time Processing**: Immediate feedback on code with a user-friendly interface.

## 🔍 Tech Stack
### ✨Frontend:
- React.js
- Tailwind CSS
- Prism.js (for syntax highlighting)

### 🛠️Backend:
- Node.js
- Express.js
- Gemini API (for AI-based code review)

## ⚙️Installation & Setup
### Prerequisites:
- Node.js installed
- A Gemini API key
- Git installed (optional for cloning the repository)

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ai-code-reviewer.git
   cd ai-code-reviewer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the backend directory and add:
     ```sh
     GEMINI_API_KEY=your_api_key_here
     ```
4. Start the backend server:
   ```sh
   cd backend
   node server.js
   ```
5. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```
6. Open the application in your browser at `http://localhost:5173`

## 🧑‍💻 Usage
- Open the website.
- Write or paste your code in the editor.
- Click the **Review** button.
- Get AI-generated feedback on your code.

## 🤝Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.



