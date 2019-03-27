import React, { Component } from "react";
import { Button } from "reactstrap";

var saveToWherever = function(data) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(
        JSON.stringify(data)
          .split()
          .join("   ")
      );
    }, 3000);
  });
};


class CreateStudent extends Component {
  constructor() {
    super();

    this.state = {
      studentAddress: "",
      studentName: "",
      studentDOB: "",
      studentID: "",

      status: null,
      result: null,

      previousResults: null
    };

    this.onStudentFieldChange = this.onStudentFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onStudentFieldChange(nameOfTheField) {
    return e => {
      let value = e.target.value;
      this.setState({
        [nameOfTheField]: value
      });
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      status: "loading",
      result: null
    });
    
    let result = await saveToWherever(this.state.studentAddress, );
    this.setState({
      status: "done",
      result: result
    });
  }

  render() {
    return (
      <div>
        <h2>Create student {this.props.name}</h2>
        <form onSubmit={this.handleSubmit}>
          Student Address: <br />
          <input
            value={this.state.studentAddress}
            onChange={this.onStudentFieldChange("studentAddress")}
            type="text"
            name="studentAddress"
          />
          <br />
          Student Name: <br />
          <input
            value={this.state.studentName}
            onChange={this.onStudentFieldChange("studentName")}
            type="text"
            name="studentName"
          />
          <br />
          Date of Birth: <br />
          <input
            value={this.state.studentDOB}
            onChange={this.onStudentFieldChange("studentDOB")}
            type="date"
            name="studentDOB"
          />
          <br />
          Student ID: <br />
          <input
            value={this.state.studentID}
            onChange={this.onStudentFieldChange("studentID")}
            type="text"
            name="studentID"
          />
          <br />
          <br />
          <input type="submit" id="createSubmit" value="Add student" />
        </form>
        {this.state.status !== null ? (
          <table>
            <thead>
              <tr>
                <th>Tx Receipt Category</th>
                <th />
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tx #</td>
                <td>:</td>
                <td>
                  Status: {this.state.status}
                  Result: {this.state.result}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}
export default CreateStudent;
