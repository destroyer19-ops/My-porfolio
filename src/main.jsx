import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './styles/tailwind.css'
// import './index.css'
import { ThemeProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
