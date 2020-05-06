import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
function App() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>POC React Weather</h1>
     </header>
     <main className="App-main">
       <Forecast />
     </main>
     <footer className="App-footer">
       Poc(mak)
     </footer>
   </div>
 );
}
export default App;