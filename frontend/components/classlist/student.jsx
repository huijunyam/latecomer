import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router';

class Student extends React.Component {
  constructor(props){
    super(props);
    this.state = { lateness: this.props.student.lateness };
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.router.push('/classlist');
  }

  update(e) {
    e.preventDefault();
    const lateness = this.state.lateness - 1;
    const latenessUpdate = {
      lateness: lateness
    };
    let student = merge(this.props.student, latenessUpdate);
    this.props.updateStudent(student).then(() => this.redirect());
  }

  delete(e) {
    e.preventDefault();
    this.props.deleteStudent(this.props.student.id).then(() => this.redirect());
  }

  render() {
    const student = this.props.student;
    return (
      <li className="list-name-student">
        <div className="col-lastest">
          <div className="inline-word-student">
            <div>{student.name}</div>
            <div className="student-lateness">{student.lateness}</div>
          </div>
        </div>
        <div className="col-first-operation">
          <div className="operation">
            <button onClick={this.update} className="operation-button-first">Edit</button>
            <button onClick={this.delete} className="operation-button-second">Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Student;
