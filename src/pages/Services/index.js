import React from 'react';

import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';

import { homeObjFour } from './Data';

const Services = () => {
  return (
    <>
      <Pricing />
      <Hero {...homeObjFour} />
    </>
  );
};

export default Services;
