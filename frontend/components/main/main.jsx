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
          <ul>
            <li>KHAS 1</li>
            <li>KHAS 2</li>
            <li>KHAS 3</li>
            <li>KHAS 4</li>
            <li>1B</li>
            <li>2B</li>
            <li>3B</li>
            <li>4B</li>
            <li>5B</li>
            <li>6B</li>
            <li>1C</li>
            <li>2C</li>
            <li>3C</li>
            <li>4C</li>
            <li>5C</li>
            <li>6C</li>
            <li>2E</li>
            <li>3E</li>
            <li>4E</li>
            <li>1H</li>
            <li>2H</li>
            <li>3H</li>
            <li>4H</li>
            <li>5H</li>
            <li>6H</li>
            <li>1J</li>
            <li>2J</li>
            <li>3J</li>
            <li>4J</li>
            <li>5J</li>
            <li>6J</li>
            <li>1K</li>
            <li>2K</li>
            <li>3K</li>
            <li>4K</li>
            <li>5K</li>
            <li>6K</li>
            <li>1M</li>
            <li>2M</li>
            <li>3M</li>
            <li>4M</li>
            <li>5M</li>
            <li>6M</li>
            <li>1P</li>
            <li>2P</li>
            <li>3P</li>
            <li>4P</li>
            <li>5P</li>
            <li>6P</li>
            <li>1U</li>
            <li>2U</li>
            <li>3U</li>
            <li>4U</li>
            <li>5U</li>
            <li>6U</li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
