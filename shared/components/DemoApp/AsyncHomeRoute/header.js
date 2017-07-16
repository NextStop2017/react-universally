/**
 * Created by wongkaho on 18/6/2017.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      <li data-target="#carouselExampleIndicators" data-slide-to="2" />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="carouselImg" src="http://m.chanyouji.cn/index-cover/10295-298771.jpg" />
        <div className="carousel-caption d-none d-md-block">
          <h3><NavLink className="link" to={'/login'}>關西六日行</NavLink></h3>
        </div>
      </div>
      <div className="carousel-item">
        <img className="carouselImg" src="http://m.chanyouji.cn/index-cover/331-13837.jpg" />
        <div className="carousel-caption d-none d-md-block">
          <h3><NavLink className="link" to={'/login'}>北歐星空之旅</NavLink></h3>
        </div>
      </div>
      <div className="carousel-item">
        <img className="carouselImg" src="http://m.chanyouji.cn/index-cover/27926-894425.jpg" />
        <div className="carousel-caption d-none d-md-block">
          <h3><NavLink className="link" to={'/login'}>東歐小鎮</NavLink></h3>
        </div>
      </div>
    </div>
  </div>
);
