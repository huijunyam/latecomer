import React from 'react';

class Student extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const student = this.props.student;
    return (
      <li>
        <h3>{student.name}</h3>
        <h3>{student.lateness}</h3>
        <div>
          <button><img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487975822/Logomakr_5of6gq_uzq6lf.png"/></button>
          <button><img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487975822/Logomakr_2CySPV_akwlqu.png" /></button>
        </div>
      </li>
    );
  }
}

export default Student;
