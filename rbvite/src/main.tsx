import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Hello from './components/Hello.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <hr />
    <Hello />
  </StrictMode> // NOTE: clean up을 테스트하기 위해 필요함
);
