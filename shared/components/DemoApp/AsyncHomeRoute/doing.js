/**
 * Created by wongkaho on 18/6/2017.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Doing = () => (
  <div style={{ marginTop: 50 }}>
    <div className="container">
      <h2>吃喝玩樂</h2>
      <hr />
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12 col">
        <NavLink className="link" to={'/login'}>
          <img
            className="Img1"
            src="http://tw1001k.tw.tranews.com/images/Link/TW1001K000001_4_3.jpg"
          />
          <div className="scrim">
            <div className="Container">
              <div>
                <h4 className="h4">
                  <span className="City">美食之旅</span>
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
            src="https://icrvb3jy.xinmedia.com/solomo/article/4504/56C5CBE7-92EF-41EC-9839-0CF0B4409774.jpg"
          />
          <div className="scrim">
            <div className="Container">
              <div>
                <h4 className="h4">
                  <span className="City">水上活動</span>
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
            src="http://www.regent-petite-france.com/wp-content/uploads/sites/29/2013/09/RPF_bien-etre3.jpg"
          />
          <div className="scrim">
            <div className="Container">
              <div>
                <h4 className="h4">
                  <span className="City">休閑放鬆</span>
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
      <p><NavLink to={'/login'}>搜尋更多資訊</NavLink></p>
    </div>
  </div>
);
