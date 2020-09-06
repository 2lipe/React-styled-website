import React from 'react';

import Hero from '../../components/Hero';

import { homeObjTwo, homeObjFour } from './Data';

const Home = () => {
  return (
    <>
      <Hero {...homeObjTwo} />
      <Hero {...homeObjFour} />
    </>
  );
};

export default Home;
