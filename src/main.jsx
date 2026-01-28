import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            duration: 1000,
            style: {
              background: '#0f172a',   // slate-900
              color: '#fff',
              padding: '12px 16px',
              borderRadius: '10px',
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#22c55e', // green-500
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444', // red-500
                secondary: '#fff',
              },
            },
          }}
        />
      
    </BrowserRouter>
  </AuthProvider>

  </StrictMode >,
)
