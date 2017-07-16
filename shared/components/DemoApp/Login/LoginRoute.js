/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LoginRoute extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="LoginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">登入</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="/login" method="post">
                <div>
                  <label htmlFor="username">
                    <br />
                    <br />
                    Email:
                  </label>
                  <input
                    className="form-control"
                    id="username"
                    type="text"
                    name="username"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
                </div>
                <div>
                  <br />
                  <label htmlFor="password">
                    Password:
                  </label>
                  <input className="form-control" id="password" type="password" name="password" />
                </div>
                <br />
                <div>
                  <button type="submit" className="btn btn-primary" value="Log In">
                    登錄
                  </button>
                </div>
                <br />
                <p>忘記密碼？<a href="/forgotpassword" aria-disabled="false">按這裡</a></p>
              </form>
            </div>
            <div className="modal-footer">
              <p>
                還沒有帳號嗎？
                <a href="/" data-toggle="modal" data-target="#RegisterModal" data-dismiss="modal">
                  註冊
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRoute;
