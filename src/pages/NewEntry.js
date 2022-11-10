import React from 'react';
import { Navigation } from '../components';

export const NewEntry = () => {
  return (
    <>
      <Navigation />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold mt-4'>New Entry</h2>
        <form className='space-y-8 divide-y divide-gray-200'>
          <div>
            <div>
              <div>
                <p className='mt-1 text-sm text-gray-500'>
                  Use this form to enter a new publication entry.
                </p>
              </div>
            </div>

            <div className='pt-8'>
              <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-6'>
                  <label
                    htmlFor='about'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Abstract
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='about'
                      name='about'
                      rows={3}
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      defaultValue={''}
                    />
                  </div>
                  <p className='mt-2 text-sm text-gray-500'>
                    Enter the publication abstract.
                  </p>
                </div>

                <div className='sm:col-span-6'>
                  <label
                    htmlFor='street-address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Publication Year
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='street-address'
                      id='street-address'
                      autoComplete='street-address'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-6'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Document Type
                  </label>
                  <div className='mt-1'>
                    <select
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    >
                      <option>Article</option>
                      <option>Authored Book</option>
                      <option>Book Chapter</option>
                      <option>Edited Book</option>
                      <option>Research Paper</option>
                      <option>CIRS Occasional Paper</option>
                      <option>Editorial</option>
                    </select>
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Page Start
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='region'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Page End
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='postal-code'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Page Count
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='postal-code'
                      id='postal-code'
                      autoComplete='postal-code'
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='button'
                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
