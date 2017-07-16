import React from 'react';
import Helmet from 'react-helmet';
import { Header } from './header';
import { Post } from './post';
import { Location } from './location';
import { Doing } from './doing';
import config from '../../../../config';

function HomeRoute() {
  return (
    <div>
      <Helmet>
        <title>Nextstop</title>
      </Helmet>
      <Header />
      <Post />
      <Location />
      <Doing />
    </div>
  );
}

export default HomeRoute;
