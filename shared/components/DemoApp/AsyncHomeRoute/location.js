/**
 * Created by wongkaho on 18/6/2017.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../globals.css';

export const Location = () => (
  <div style={{ marginTop: 50 }}>
    <div className="container">
      <h2>熱門景點</h2>
      <hr />
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12 col">
        <NavLink className="link" to={'/login'}>
          <img
            className="Img1"
            src="https://content.skyscnr.com/298f7876c93ca82e92877c5c672bd5aa/GettyImages-176796713.jpg"
          />
          <div className="scrim">
            <div className="Container">
              <div>
                <h4 className="h4">
                  <span className="City">東京,</span>
                  <span className="Country">日本</span>
                </h4>
              </div>
              <hr className="Hr" />
              <div>
                <h5 className="h5">獲取資訊</h5>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="col-lg-4 col-md-6 col">
        <NavLink className="link" to={'/login'}>
          <img
            className="Img2"
            src="https://content.skyscnr.com/1ffdf5e0a4bbc3e969b2410c8685bec1/GettyImages-485903556.jpg"
          />
          <div className="scrim">
            <div className="Container">
              <div>
                <h4 className="h4">
                  <span className="City">高雄,</span>
                  <span className="Country">台灣</span>
                </h4>
              </div>
              <hr className="Hr" />
              <div>
                <h5 className="h5">獲取資訊</h5>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="col-lg-4 col-md-6 col">
        <NavLink className="link" to={'/login'}>
          <img
            className="Img3"
            src="https://content.skyscnr.com/a85652cfc209d9a5b727444a49b45abc/GettyImages-166345482.jpg"
          />
          <div className="scrim">
            <div className="Container">
              <div>
                <h4 className="h4">
                  <span className="City">北海道,</span>
                  <span className="Country">日本</span>
                </h4>
              </div>
              <hr className="Hr" />
              <div>
                <h5 className="h5">獲取資訊</h5>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
    <div className="container" style={{ marginTop: 10 }}>
      <p><NavLink to={'/login'}>發掘更多景點</NavLink></p>
    </div>
  </div>
);
