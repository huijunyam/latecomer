import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push("/newstudent");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => this.redirect());
  }

  render() {
    return (
      <div className="home-container">
        <div className="welcome-header">
          <div className="site-name-with-logo">
            <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1489190766/Logomakr_2X93RJ_no260f.png"} alt="logomakr"/></Link>
          </div>
          <ul className="welcome-page-nav">
            <li><button onClick={this.handleClick} className="welcome-list-button">New Student</button></li>
            <li className="welcome-page-list"><button className="welcome-list-button" onClick={this.handleSubmit}>Log Out</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
