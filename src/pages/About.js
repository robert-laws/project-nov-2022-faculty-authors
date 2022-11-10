import React from 'react';
import { Navigation } from '../components';

export const About = () => {
  return (
    <>
      <Navigation />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold ml-8 mt-4'>About this Site</h2>
      </div>
    </>
  );
};
