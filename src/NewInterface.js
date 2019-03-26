import React, { Component } from "react";
import web3 from "./web3";
import ipfs from "./ipfs";
import { Button } from "reactstrap";
import honoursV5 from "./honoursV5";

class NewInterface extends Component {
  state = {
    ethAddress: '',
    transactionHash: '',
    txReceipt: ''
  };
//   Need to fix this, most basic function required.
// onSubmit = async() (event) => {
//     event.preventDefault();
//     const accounts = await web3.eth.getAccounts();
//     const ethAddress = await    honoursV5.options.address;
//     this.setState({ethAddress});
// };
  render() {
    return (
      <div class="App">
        <header class="App-header">
          <h1>Honour's Application: Ethereum + IPFS</h1>
        </header>
        <hr />
        <h2>Add a new student</h2>
        <form action="">
          Student Address: <br />
          <input type="text" name="studentAddress" />
          <br />
          Student Name: <br />
          <input type="text" name="studentName" />
          <br />
          Date of Birth: <br />
          <input type="date" name="studentDOB" />
          <br />
          Student ID: <br />
          <input type="text" name="studentID" />
          <br />
          <br />
          <input type="submit" id="createSubmit" value="Add student" />
        </form>
        <table>
          <thead>
            <th>Tx Receipt Category</th>
            <th />
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>Tx #</td>
              <td>:</td>
              <td />
            </tr>
          </tbody>
        </table>
        <br />
        <hr />
        <h2>Get Students Details</h2>
        <form action="">
          Student address:
          <br />
          <input type="text" name="studentAddress" />
          <br />
          <br />
          <input type="submit" id="" value="Get details" />
        </form>
        <table>
          <thead>
            <th>Returned result</th>
            <th />
            <th>Values</th>
          </thead>
          <tbody>
            <tr>
              <td>Address</td>
              <td>:</td>
              <td />
            </tr>
            <tr>
              <td>Student:</td>
              <td>:</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default NewInterface;
