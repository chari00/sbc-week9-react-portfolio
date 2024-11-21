import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
// import { Vortex } from './components/ui/Vortex.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* <Vortex> */}
        <App />
        {/* </Vortex> */}
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
