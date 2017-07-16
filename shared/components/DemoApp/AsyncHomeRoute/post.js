/**
 * Created by wongkaho on 18/6/2017.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Post = () => (
  <div style={{ marginTop: 50 }}>
    <div className="container">
      <h2>熱門遊記</h2>
      <hr />
    </div>
    <div className="card-deck row">
      <div className="card">
        <NavLink to={'/login'}>
          <img
            className="card-img-top Img1"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cb/c1/ab/ikos-olivia-ikos-resorts.jpg"
          />
        </NavLink>
        <div className="card-block">
          <NavLink to={'/login'}>
            <h4 className="card-title">淫賤2017之越南越愛-峴港</h4>
          </NavLink>
          <p className="card-text">峴港 越南</p>
          <p className="card-text">
            <small className="text-muted">26,253 則評論</small>
          </p>
        </div>
      </div>
      <div className="card">
        <NavLink to={'/login'}>
          <img
            className="card-img-top Img2"
            src="https://content.skyscnr.com/1ffdf5e0a4bbc3e969b2410c8685bec1/GettyImages-485903556.jpg"
          />
        </NavLink>
        <div className="card-block">
          <NavLink to={'/login'}>
            <h4 className="card-title">乞力馬扎羅山還有雪嗎？</h4>
          </NavLink>
          <p className="card-text">坦桑尼亞 非洲</p>
          <p className="card-text">
            <small className="text-muted">22,253 則評論</small>
          </p>
        </div>
      </div>
      <div className="card">
        <NavLink to={'/login'}>
          <img
            className="card-img-top Img3"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/af/77/e3/fare-spa.jpg"
          />
        </NavLink>
        <div className="card-block">
          <NavLink to={'/login'}>
            <h4 className="card-title">清邁鳩hea記</h4>
          </NavLink>
          <p className="card-text">清邁 泰國</p>
          <p className="card-text">
            <small className="text-muted">18,253 則評論</small>
          </p>
        </div>
      </div>
    </div>
    <div className="container" style={{ marginTop: 10 }}>
      <p><NavLink to={'/login'}>搜尋更多遊記</NavLink></p>
    </div>
  </div>
);
