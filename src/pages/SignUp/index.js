import React from 'react';

import Hero from '../../components/Hero';

import { homeObjThree } from './Data';

const SignUp = () => {
  return (
    <>
      <Hero {...homeObjThree} />
    </>
  );
};

export default SignUp;
