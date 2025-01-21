import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <BrowserRouter>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<App />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter> */}
  </StrictMode>,
)
