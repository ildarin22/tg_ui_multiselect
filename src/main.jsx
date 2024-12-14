/* 
✨ CoonDev • http://dev.coonlink.fun/ 

 ▄█▄    ████▄ ████▄    ▄   ██▄   ▄███▄      ▄  
 █▀ ▀▄  █   █ █   █     █  █  █  █▀   ▀      █ 
 █   ▀  █   █ █   █ ██   █ █   █ ██▄▄   █     █
 █▄  ▄▀ ▀████ ▀████ █ █  █ █  █  █▄   ▄▀ █    █
 ▀███▀              █  █ █ ███▀  ▀███▀    █  █ 
                    █   ██                 █▐  
                                           ▐   
*/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@telegram-apps/telegram-ui/dist/styles.css';
import App from './App.jsx';
import { AppRoot } from '@telegram-apps/telegram-ui';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </StrictMode>
);
