/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';


class RegisterRoute extends Component {

  render() {
    return (
          <div>
          <form action="/register" method="post">
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
              <label htmlFor="first_name">
                First Name:
              </label>
              <input
                className='input'
                id="first_name"
                type="text"
                name="first_name"
              />
            </div>
            <div>
              <label htmlFor="last_name">
                Last Name:
              </label>
              <input
                className='input'
                id="last_name"
                type="text"
                name="last_name"
              />
            </div>
            <div>
              <button type="submit" value ="Register">
                Register
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default RegisterRoute;
