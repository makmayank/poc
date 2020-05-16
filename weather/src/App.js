import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
{/*
class App extends  React.Component{
  constructor(props){
    super(props);
    this.state= {apiResponse:""};
  }

  callServer(){
    fetch("http://localhost:4000/expnodepoc")
    .then(res =>res.text())
    .then(res =>this.setState({apiResponse:res}));
  }

  componentWillMount(){
    this.callServer();
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
      </header>
      <p>{this.state.apiResponse}</p>
      </div>

    );
  }
}
*/}

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
