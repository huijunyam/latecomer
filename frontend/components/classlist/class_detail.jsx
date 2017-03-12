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
        <div>
          <ul className="student-list">
            {this.props.classDetail.students.map((student, idx) => (<Student key={idx}
              deleteStudent={this.props.deleteStudent} id={this.props.classId} student={student} />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClassDetail;
