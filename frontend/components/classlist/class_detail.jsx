import React from 'react';
import { Link } from 'react-router';
import Student from './student';

class ClassDetail extends React.Component {
  componentDidMount() {
    this.props.fetchClass(this.props.classId);
  }

  render() {
    return (
      <div>
        <h1>{this.props.classDetail.name}</h1>
        <div>
          <h3>Name</h3>
          <h3>Lateness</h3>
          <h3>Operation</h3>
        </div>
        <div>
          <ul>
            {this.props.classDetail.students.map(student => (<Student key={student.id} student={student} />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClassDetail;
