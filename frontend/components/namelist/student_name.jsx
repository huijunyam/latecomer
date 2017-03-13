import React from 'react';

class StudentName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const student = this.props.student;
    return (
      <li className="list-name-student">
        <div className="col-lastest">
          <div className="inline-word-student-group">
            <div>{student.name}</div>
            <div>{student.classroom.name}</div>
          </div>
        </div>
        <div className="col-first-lateness">
          <div>{student.lateness}</div>
        </div>
      </li>
    );
  }
}

export default StudentName;
