import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.redirect = this.redirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
  }

  redirect() {
    this.props.router.push("/main");
  }

  update(field) {
      return e => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul className='auth-error'>
          {this.props.errors.map((err, idx) => (
            <li key={`err-${idx}`}>
              {err}
            </li>
          ))}
        </ul>
      );
    }
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => this.redirect());
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome">
          <img className="welcome-logo" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1489198087/Lencana_Sekolah_Masai_zvdv1t.jpg"/>
          <form onSubmit={this.handleSubmit} className="auth-form-box">
              {this.renderErrors()}
              <div className="auth-form">
                <br />
                <br />
      							<input type="text"
                      placeholder="username"
      								value={this.state.username}
      								onChange={this.update("username")}
      								className="auth-input" />
                  <br />
      							<input type="password"
                      placeholder="password"
      								value={this.state.password}
      								onChange={this.update("password")}
      								className="auth-input" />
    						<br/>
                <br />
                  <input className="button" type="submit" value="Log In"/>
              </div>
            </form>
        </div>
      </div>
    );
  }

}

export default Welcome;
