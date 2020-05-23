import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import POCserver from "./components/POCserver/POCserver";
import Student from "./components/Student/Student"
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
       <h1>POC React</h1>
     </header>
     <main className="App-main">
      <Student />
     </main>
     <footer className="App-footer">
       Poc(mak)
     </footer>
   </div>
 );
}
export default App;
