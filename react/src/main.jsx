import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import './index.css'
import TaskPage from './pages/TaskPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/task' element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
