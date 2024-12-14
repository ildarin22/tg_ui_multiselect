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
import { useState } from "react";

import "./App.css";
import MultiSel from "./MultiSel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <MultiSel />
    </div>
  );
}

export default App;
