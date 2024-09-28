import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.css';
import './assets/fonts/Ondo/FONTSPRINGDEMO-OndoBoldRegular.ttf';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
