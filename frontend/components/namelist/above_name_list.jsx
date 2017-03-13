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

  changeHeader() {
    if (this.props.numId === 3) {
      return "Above 3";
    } else {
      return "Above 5";
    }
  }

  compare(a,b) {
    if (a.lateness < b.lateness) {
      return 1;
    }
    if (a.lateness > b.lateness) {
      return -1;
    }
    return 0;
  }

  filteredStudent() {
    if (this.props.numId === 3) {
      return this.props.students.filter(student => student.dates.length >= 3).sort(this.compare);
    } else {
      return this.props.students.filter(student => student.dates.length >= 5).sort(this.compare);
    }
  }

  render() {
    return (
      <div>
        <h2 className="classname">{this.changeHeader()}</h2>
        <div className="list-name">
          <div className="col-lastest">
            <div className="inline-word">
              <div>Student Name</div>
              <div>Class</div>
            </div>
          </div>
          <div className="col-first">Lateness</div>
        </div>
        <ul className="student-list">
          {this.filteredStudent().map((student, idx) => <StudentName key={idx} student={student} />)}
        </ul>
      </div>
    );
  }
}

export default AboveNameList;
