// import { useState } from 'react';
import {
  Navigation,
  InputWithLabel,
  SingleTextInputWithButton,
} from '../components';

export const Home = () => {
  const handleSearchInput = (inputVal) => {
    console.log(inputVal);
  };

  return (
    <>
      <Navigation />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold mt-4'>Home Page</h2>
        <hr className='my-5' />

        <InputWithLabel
          labelProps={{
            label: 'Search Research Output',
            htmlForType: 'search',
          }}
          inputProps={{
            inputType: 'text',
            inputName: 'search',
            placeholder: 'Enter your search',
          }}
        />
        <hr className='my-5' />
        <SingleTextInputWithButton
          inputType='text'
          inputName='search'
          placeholder='Enter a Search'
          buttonText='Search'
          onButtonClick={handleSearchInput}
        />
      </div>
    </>
  );
};
