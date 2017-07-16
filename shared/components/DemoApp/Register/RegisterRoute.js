/* eslint-disable react/no-unescaped-entities */

/** import React, { Component } from 'react';
import TextView from '../Util/TextView.js';
import update from 'immutability-helper';
import { run, ruleRunner } from '../Validation/ruleRunner.js'
import { required, mustMatch, minLength } from '../Validation/rules.js';
import $ from 'jquery';

const fieldValidations = [
  ruleRunner("firstName", "First Name", required),
  ruleRunner("emailAddress", "Email Address", required),
  ruleRunner("password1", "Password", required, minLength(6)),
  ruleRunner("password2", "Password Confirmation", mustMatch("password1", "Password"))
];

class RegisterRoute extends Component {

  constructor(props) {
    super(props);
    this.handleFieldChanged = this.handleFieldChanged.bind(this);
    this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
    this.errorFor = this.errorFor.bind(this);
    this.state = {
      showErrors: false,
      validationErrors: { },
    }
  }

  componentWillMount() {
    // Run validations on initial state
    this.setState({validationErrors: run(this.state, fieldValidations)});
  }

  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  handleFieldChanged(field) {
    return (e) => {
      // update() is provided by React Immutability Helpers
      // https://facebook.github.io/react/docs/update.html
      let newState = update(this.state, {
        [field]: {$set: e.target.value}
      });
      newState.validationErrors = run(newState, fieldValidations);
      this.setState(newState);
    };
  }

  handleSubmitClicked() {
    this.setState({showErrors: true});
    if($.isEmptyObject(this.state.validationErrors) === false) return null;
    return this.props.onCreateAccount(this.state);
  }

  render() {
    return (
      <div className="CreateAccount">
        <h2>Create a New Account</h2>

        <TextView placeholder="First Name" showError={this.state.showErrors}
                text={this.props.firstName} onFieldChanged={this.handleFieldChanged("firstName")}
                errorText={this.errorFor("firstName")} />

        <TextView placeholder="Email Address" showError={this.state.showErrors}
                text={this.props.emailAddress} onFieldChanged={this.handleFieldChanged("emailAddress")}
                errorText={this.errorFor("emailAddress")} />

        <TextView placeholder="Password" showError={this.state.showErrors} type="password"
                  text={this.props.password1} onFieldChanged={this.handleFieldChanged("password1")}
                  errorText={this.errorFor("password1")} />

        <TextView placeholder="Confirm Password" showError={this.state.showErrors} type="password"
                  text={this.props.password2} onFieldChanged={this.handleFieldChanged("password2")}
                  errorText={this.errorFor("password2")} />
        <input id="CreateAccountButton" type='submit' value="Create Account" onClick={this.handleSubmitClicked} ></input>
      </div>
    );
  }
}

export default RegisterRoute; **/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RegisterRoute extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="RegisterModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="RegisterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">註冊</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body ">
              <div className="container">
                <form action="/register" method="post">

                  <div className="row">
                    <input
                      className="form-control col-md-12"
                      id="username"
                      type="text"
                      name="username"
                      placeholder="電子郵件"
                      // style= {{width: 150}}
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                    />

                  </div>
                  <br />
                  <div className="row">
                    <div className="ui-grid-a">
                      <div className="ui-block-a">
                        <input
                          className="form-control"
                          id="first_name"
                          type="text"
                          name="first_name"
                          placeholder="名"
                          style={{ width: 150 }}
                        />
                      </div>
                      <div className="ui-block-b">
                        <input
                          className="form-control"
                          id="last_name"
                          type="text"
                          name="last_name"
                          placeholder="姓"
                          style={{ width: 150 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <fieldset className="form-group">
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="Sex">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="male"
                            id="male"
                            defaultChecked
                          />
                          男
                        </label>
                        <label className="form-check-label" htmlFor="Sex">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="female"
                            id="female"
                            defaultChecked
                          />
                          女
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="建立密碼"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="agreement">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="agreement"
                        id="agreement"
                      />
                      我想透過電子郵件收到有關Nextstop.hk和其合作夥伴的優惠券、促銷活動資訊、調查和更新。
                    </label>
                  </div>
                  <div>
                    <p>點擊註冊或繼續，即表示我同意Nextstop.hk的服務條款、支付服務條款、隱私政策和反歧視政策。</p>
                  </div>
                  <div className="form-group">
                    <button type="submit" value="Register" className="btn btn-primary">
                      註冊
                    </button>
                  </div>

                </form>
              </div>
            </div>
            <div className="modal-footer" />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterRoute;
