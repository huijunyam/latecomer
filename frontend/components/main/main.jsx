import React from 'react';
import HeaderContainer from '../layout/header_container';
import Footer from '../layout/footer';
import MainContainer from './main_container';

class Main extends React.Component {
  render() {
    return (
      <div className="align-footer">
        <HeaderContainer />
        <Footer />
      </div>
    );
  }
}

export default Main;
