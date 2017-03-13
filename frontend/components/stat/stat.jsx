import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';

class Stat extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <h2 className="namelist-header">Select the type of view</h2>
        <div className="button-namelist-container">
          <Link to={"/calendar"}><button className={`namelist-button`}>Calendar</button></Link>
          <Link to={"/graph"}><button className={`namelist-button`}>Graph</button></Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}


export default Stat;
