import React from 'react';
import HeaderContainer from '../layout/header_container';
import Footer from '../layout/footer';
import MainContainer from './main_container';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="align-footer">
        <div>
          <HeaderContainer />
          <div className="main-choice">
            <div className="main-choice-list">
              <Link to="/form" >
                <img className="main-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1489188250/Logomakr_9sH4Wl_buyoar.png" />
                <p className="main-name-list">New Form</p>
              </Link>
            </div>
            <div className="main-choice-list">
              <Link to="/classlist" >
                <img className="main-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1489188250/Logomakr_6Xpc1Z_s6tnai.png" />
                <p className="main-name-list">Class List</p>
              </Link>
            </div>
            <div className="main-choice-list">
              <Link to="/stat" >
                <img className="main-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1489188250/Logomakr_2q5DOl_jmjgm7.png" />
                <p className="main-name-list">Statistics</p>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
