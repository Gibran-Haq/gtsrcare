import React, { Component } from 'react';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';
import { loginActionCreator } from '../actions/action';
import { Link } from 'react-router-dom';

import '../stylesLogin.css';
import reducers from '../reducers';

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  submitLogin: (username, password) => dispatch(loginActionCreator(username, password))
});

// mapStateToProps 
const mapStateToProps = state => ({
  user_id: state.compliments.user_id,
  error: state.compliments.error
})
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      error: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Handle click method to handle user login
  handleClick() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    this.props.submitLogin(username, password);
  }

  //implemented 3 part conditional to incorporate a login error message
  //original code start line 89
  render() {
if (this.props.user_id) {
  return (<Navigate to='/dashboard' />)
}
else if (!this.props.user_id && !this.props.error){
  return (
    <div className='login'>
      <h2>Log In</h2>
      <form className='container'>
        <label className='container' id='field-container'>
          <div id='loginUsername'>Username</div>
          <input type='text' id='username' />
        </label>

        <label className='container' id='field-container'>
          <div id='loginPassword'> Password</div>
          <input type='password' id='password' />
        </label>
      </form>
      <button id='loginButton' onClick={this.handleClick}>
        <div> Log In </div>
      </button>

      <Link to='/signup' className='signup-link'>Sign Up </Link>
    </div>
  )
}
else if (!this.props.user_id && this.props.error) {
  return (
      <div className='login'>
        <h2>Log In</h2>
        <form className='container'>
          <label className='container' id='field-container'>
            <div id='loginUsername'>Username</div>
            <input type='text' id='username' />
          </label>

          <label className='container' id='field-container'>
            <div id='loginPassword'> Password</div>
            <input type='password' id='password' />
          </label>
          <div style={{color: "red", fontSize: "16px"}} id='loginError'><strong><em>Error</em></strong>: {this.props.error} </div>
        </form>

        <button id='loginButton' onClick={this.handleClick}>
          <div> Log In </div>
        </button>

        <Link to='/signup' className='signup-link'>Sign Up </Link>
      </div>
    )
  }
    // return ( this.props.user_id ? (
    //   <Navigate to='/dashboard' />
    // ) : (
    //   <div className='login'>
    //     <h2>Log In</h2>
    //     <form className='container'>
    //       <label className='container' id='field-container'>
    //         <div id='loginUsername'>Username</div>
    //         <input type='text' id='username' />
    //       </label>

    //       <label className='container' id='field-container'>
    //         <div id='loginPassword'> Password</div>
    //         <input type='password' id='password' />
    //       </label>
    //       <div id='loginError'>There's something wrong with your username or password.</div>
    //     </form>

    //     <button id='loginButton' onClick={this.handleClick}>
    //       <div> Log In </div>
    //     </button>

    //     <Link to='/signup' className='signup-link'>Sign Up </Link>
    //   </div>
    // )
    // )
  }
}

// styles = {
//   container: {
//     font-color: red;
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Login);
