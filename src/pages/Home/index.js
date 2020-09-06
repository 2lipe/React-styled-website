import React from 'react';

import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjThree} />
      <Pricing />
      <Hero {...homeObjFour} />
    </>
  );
};

export default Home;
