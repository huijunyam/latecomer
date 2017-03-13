import React from 'react';
import { Link } from 'react-router';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { from: "", to: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
    this.props.fetchStudents();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  checkDate() {
    let fromDateArr = this.state.from.split("-").map(el => parseInt(el));
    let toDateArr = this.state.to.split("-").map(el => parseInt(el));
    for (let i = 0; i < 3; i++){
      if (fromDateArr[i] > toDateArr[i]) {
        return false;
      }
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.from === "" || this.state.to === "") {
      this.props.sendError(["Date is required"]);
    } else if (this.checkDate() === false){
      this.props.sendError(["From date should be before to date"]);
    } else {
      const id = this.state.from + ">" + this.state.to;
      this.props.router.push(`/graph/${id}`);
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="form-error">
          {
            this.props.errors.map((err, idx) => (
              <li className="error-form" key={`err-${idx}`}>{err}</li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <h2 className="namelist-header">Select the date range for detail view</h2>
        <form onSubmit={this.handleSubmit} className="create-form">
          {this.renderErrors()}
          <label className="strong-form">From</label>
            <input type="date"
              value={this.state.from}
              onChange={this.update("from")}
              className="date-input" />
          <br />
          <label className="strong-form">To</label>
            <input type="date"
              value={this.state.to}
              onChange={this.update("to")}
              className="date-input" />
            <br />
            <br />
            <input className="submit-button" type="submit" value="Show Graph"/>
        </form>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Graph;
