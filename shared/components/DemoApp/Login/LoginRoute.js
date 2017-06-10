/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';


class LoginRoute extends Component {
  
  render() {
    return (
          <div>
          <form action="/login" method="post">
            <div>
              <label htmlFor="username">
                Email:
              </label>
              <input
                className='input'
                id="username"
                type="text"
                name="username"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
              />
            </div>
            <div>
              <label htmlFor="password">
                Password:
              </label>
              <input
                className='input'
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div>
              <button type="submit" value ="Log In">
                Log in
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default LoginRoute;
