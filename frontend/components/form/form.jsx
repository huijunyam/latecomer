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
      let index = dates.indexOf(this.state.date);
      dates = dates.slice(0, index).concat(dates.slice(index + 1));
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
    } else if (this.state.lateOperation === "" || this.state.lateOperation === "Select an operation") {
      this.props.sendError(["Operation is required"]);
    } else if (this.state.lateOperation === "Add" &&
      this.props.student.dates.indexOf(this.state.date) !== -1) {
      this.props.sendError(["Late day has been added"]);
    } else if (this.state.lateOperation === "Remove" &&
      this.props.student.dates.indexOf(this.state.date) === -1) {
      this.props.sendError(["Please choose the correct date that is in the list above"]);
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
      this.props.updateStudent(student).then(() => this.props.router.push(`/classlist/${id}`));
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

  compare(a,b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  sortDate() {
    return this.props.student.dates.sort(this.compare);
  }

  renderLateDay() {
    if (this.props.student.dates.length === 0) {
      return "Date: None";
    } else if (this.props.student.dates.length === 1) {
      return "Date:";
    } else {
      return "Dates:";
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="form-container">
          <h2 className="form-classname">{this.props.student.classroom.name}</h2>
          <h2 className="form-name"><strong className="strong-form">Student Name: </strong>{this.props.student.name}</h2>
          <h2 className="form-name"><strong className="strong-form">Number of Lateness: </strong>{this.props.student.lateness}</h2>
          <h2 className="form-name"><strong className="strong-form">{this.renderLateDay()}</strong></h2>
          <ul className="date-list">
            {this.sortDate().map((date, idx) => <li className="form-dates" key={`student-${this.props.student.id}-date-${idx}`}>{date}</li>)}
          </ul>
            <form onSubmit={this.handleSubmit} className="create-form">
              {this.renderErrors()}
              <label className="strong-form">Late Date </label>
                <input type="date"
                  value={this.state.date}
                  onChange={this.update("date")}
                  className="date-input" />
                <br />
                <br />
                <label className="strong-form">Operation</label>
                <select
                 className="operation-input"
                 value={this.state.lateOperation}
                 onChange={this.update('lateOperation')}>
                 <option>Select an operation</option>
                 <option>Add</option>
                 <option>Remove</option>
                </select>
                <br />
                <br />
               <input className="submit-button" type="submit" value="Update Student Profile"/>
            </form>
        </div>
      </div>
    );
  }
}

export default Form;
