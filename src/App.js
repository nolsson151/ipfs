import React, { Component } from "react";
import CreateStudent from "./Forms/CreateStudent";


var getEthAddress = function() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('dasdasdasdasd');
    }, 3000);
  });
};


class App extends Component {
  constructor () {
    super()

    this.state = {
      ethAddress: null
    }
  }

  async componentWillMount () {
    var ethAddress = await getEthAddress()
    this.setState({ethAddress: ethAddress})
  }

  render() {
    if (this.state.ethAddress === null) {
      return (
        <div>Loading ethAddress</div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ethereum and IPFS using Infura</h1>
        </header>
        <CreateStudent ethAddress={this.state.ethAddress} name={'Dimitar'}/>
      </div>
    );
  }
}
export default App;
