import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../layout/header_container';
import ClassListItem from './classlist_item';

class ClassList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchClasses();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <h2 className="classlist-classname">Select the class</h2>
        <div className="class-list-whole">
          <ul className="class-list">
              {this.props.classes.map(classname => (<ClassListItem key={classname.id} classname={classname} />))}
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ClassList;
