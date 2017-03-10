import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Footer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="welcome-footer">
        <p className="footer-note">Copyright (c) 2017 Copyright Holder All Rights Reserved SJK(C) Masai.</p>
      </footer>
    );
  }
}

export default withRouter(Footer);
