import React from 'react';
import { Link } from 'react-router';
import Student from './student';

class ClassDetail extends React.Component {
  componentDidMount() {
    this.props.fetchClass(this.props.classId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.classId !== nextProps.params.classId) {
      this.props.fetchClass(nextProps.params.classId);
    }
  }

  compare(a,b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  sortStudent() {
    return this.props.classDetail.students.sort(this.compare);
  }

  render() {
    return (
      <div>
        <h1 className="classname">{this.props.classDetail.name}</h1>
        <div className="list-name">
          <div className="col-lastest">
            <div className="inline-word">
              <div>Name</div>
              <div>Lateness</div>
            </div>
          </div>
          <div className="col-first">Operation</div>
        </div>
        <div className="list-name-footer">
          <ul className="student-list">
            {this.sortStudent().map((student, idx) => (<Student key={idx}
              deleteStudent={this.props.deleteStudent} id={this.props.classId} student={student} />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClassDetail;
