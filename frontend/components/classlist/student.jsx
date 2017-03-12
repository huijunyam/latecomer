import React from 'react';

class Student extends React.Component {
  constructor(props){
    super(props);
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
            <button className="operation-button-first">Edit</button>
            <button className="operation-button-second">Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Student;
