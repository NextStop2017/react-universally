import React from 'react';

import { Header } from './header';
import { Post } from './post';
import { Location } from './location';
import { Doing } from './doing';

export const Home = () => (
  <div>
    <Header />
    <Post />
    <Location />
    <Doing />
  </div>
);
