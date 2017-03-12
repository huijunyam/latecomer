import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';

class NameList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <h2 className="namelist-header">Select the button below for detail name list</h2>
        <div className="button-namelist-container">
          <Link to={"/namelist/5"}><button className="namelist-button">Above 5</button></Link>
          <Link to={"/namelist/3"}><button className="namelist-button">Above 3</button></Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default NameList;
