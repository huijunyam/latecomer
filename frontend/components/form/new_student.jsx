import React from 'react';
import HeaderContainer from '../layout/header_container';
import { Link } from 'react-router';

class NewStudent extends React.Component {
  constructor(props){
    super(props);
    this.state = { classname: "", name: "", lateness: 0 };
    this.upate = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
    this.props.fetchClasses();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  getClassId() {
    let id = 0;
    for(let i = 0; i < this.props.classes.length; i++) {
      if (this.props.classes[i].name === this.state.classname) {
        id = this.props.classes[i].id;
      }
    }
    return id;
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.getClassId();
    const student = {
      name: this.state.name,
      lateness: 0,
      class_id: parseInt(id)
    };
    this.props.createStudent(student).then(() => this.props.router.push(`/classlist/${id}`));
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="form-error">
          {
            this.props.errors.map((err, idx) => (
              <li className="error-form" key={`err-${idx}`}>{err}</li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return(
      <div>
        <HeaderContainer />
        <form onSubmit={this.handleSubmit} className="create-form">
          {this.renderErrors()}
          <label>Student Name</label>
          <br />
          <input type="text"
            value={this.state.name}
            onChange={this.update("name")}
            className="student-name-box"/>
          <br />
          <br />
          <label>Class</label>
           <select
             value={this.state.classname}
             onChange={this.update('classname')}>
             <option>Select the class</option>
             {this.props.classnames.map((type, i) => {
               return <option value={type} key={i}>{type}</option>;
             })}
           </select>

           <input className="submit-button" type="submit" value="Add New Student"/>
        </form>
      </div>
    );
  }
}

export default NewStudent;
