import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.router.push('/');
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
            <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1489098571/Logomakr_45WJMT_euz13z.png"} alt="logomakr"/></Link>
          </div>
          <ul className="welcome-page-nav">
            <li><button className="welcome-list-button">New Student</button></li>
            <li className="welcome-page-list"><button className="welcome-list-button" onClick={this.handleSubmit}>Log Out</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
