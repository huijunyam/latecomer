import React from 'react';
import merge from 'lodash/merge';
import { Link, hashHistory } from 'react-router';

class Student extends React.Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    hashHistory.push('/classlist');
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
            <Link to={`/student/${this.props.student.id}`}>
              <button className="operation-button-first">Edit</button>
            </Link>
            <button onClick={this.delete} className="operation-button-second">Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Student;
