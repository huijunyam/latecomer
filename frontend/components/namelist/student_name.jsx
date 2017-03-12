import React from 'react';

class StudentName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const student = this.props.student;
    return (
      <li>
        <div>{student.classroom.name}</div>
        <div>{student.name}</div>
        <div>{student.lateness}</div>
      </li>
    );
  }
}

export default StudentName;
