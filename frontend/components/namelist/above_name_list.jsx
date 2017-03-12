import React from 'react';
import StudentName from './student_name';

class AboveNameList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.numId !== nextProps.params.numId) {
      this.props.fetchStudents();
    }
  }

  filteredStudent() {
    if (this.props.numId === 5) {
      return this.props.students.filter(student => student.dates.length >= 5);
    } else {
      return this.props.students;
    }
  }

  render() {
    return (
      <ul>
        {this.filteredStudent().map((student, idx) => <StudentName key={idx} student={student} />)}
      </ul>
    );
  }
}

export default AboveNameList;
