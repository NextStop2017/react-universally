import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../../globals.css';

function Menu() {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {' '}<span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="/">Logo</a>
      <div className="nav justify-content-end collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink exact className="nav-link" to={'/'} activeStyle={{ color: 'red' }}>首頁</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink exact className="nav-link" to={'/newpost'} activeStyle={{ color: 'red' }}>
              撰寫遊記
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              遊記
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          {/* <li className="nav-item">
                    <NavLink exact className='nav-link' to={"/login"}  activeStyle={{color: "red"}}>登入</NavLink>
                </li> */}
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to={'/'}
              activeStyle={{ color: 'red' }}
              data-toggle="modal"
              data-target="#LoginModal"
            >
              登入/註冊
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
