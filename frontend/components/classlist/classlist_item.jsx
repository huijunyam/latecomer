import React from 'react';
import { Link } from 'react-router';

class ClassListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {classname} = this.props;
    return (
      <li className="class-list-item" >
          <Link to={`/classlist/${classname.id}`} >
            <div className="class-list-button">{classname.name}</div>
          </Link>

      </li>
    );
  }
}

export default ClassListItem;
