import React from 'react';
import HeaderContainer from '../layout/header_container';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lateOperation: "", date: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
    this.props.fetchStudent(this.props.studentId);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  getDate() {
    let dates = this.props.student.dates;
    if (this.state.lateOperation === "Add") {
      dates.push(this.state.date);
    } else {
      dates.pop();
    }
    return dates;
  }

  getLateness() {
    let lateness = this.props.student.lateness;
    if (this.state.lateOperation === "Add") {
      lateness += 1;
    } else {
      lateness -= 1;
    }
    return lateness;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.date === "") {
      this.props.sendError(["Late date is required"]);
    } else if (this.state.lateOperation === "") {
      this.props.sendError(["Operation is required"]);
    } else {
      const dateArr = this.getDate();
      const lateness = this.getLateness();
      const id = this.props.student.classroom.id;
      const student = {
        id: this.props.student.id,
        name: this.props.student.name,
        lateness: lateness,
        class_id: id,
        dates: dateArr
      };
      this.props.updateStudent(student).then(() => this.props.router.push(`/classlist`));
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

  renderLateDay() {
    if (this.props.student.dates.length === 0 || this.props.student.dates.length === 1) {
      return "Date:";
    } else {
      return "Dates:";
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <h1>{this.props.student.name}</h1>
        <h2>{this.props.student.classroom.name}</h2>
        <h2>{this.props.student.lateness}</h2>
        <h2>{this.renderLateDay()}</h2>
        <ul>
          {this.props.student.dates.map((date, idx) => <li key={`student-${this.props.student.id}-date-${idx}`}>{date}</li>)}
        </ul>
          <form onSubmit={this.handleSubmit} className="create-form">
            {this.renderErrors()}
            <label>Date</label>
              <input type="date"
                value={this.state.date}
                onChange={this.update("date")}
                className="date-input" />
              <br />
              <label>Operation</label>
              <select
               value={this.state.lateOperation}
               onChange={this.update('lateOperation')}>
               <option>Select an operation</option>
               <option>Add</option>
               <option>Remove</option>
              </select>
             <input className="submit-button" type="submit" value="Add New Student"/>
          </form>
      </div>
    );
  }
}

export default Form;
