import React from 'react';

class POCserver extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  callServer(){
    fetch("http://localhost:4000/expnodepoc")

    .then(res => res.text())
    .then(res =>this.setState({apiResponse:res}))
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

export default POCserver;
