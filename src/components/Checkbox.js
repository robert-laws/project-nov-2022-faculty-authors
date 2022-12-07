import React, { useEffect } from 'react';
import { useCheckBox } from '../hooks/useCheckBox';

export const Checkbox = ({
  boxName,
  boxNumber,
  boxText,
  checked = false,
  checkChange,
}) => {
  const [value, onChange] = useCheckBox({
    name: boxName,
    number: boxNumber,
    checked: checked,
  });

  useEffect(() => {
    checkChange(value);
  }, [value, checkChange]);

  return (
    <div className='relative flex items-start'>
      <div className='flex h-5 items-center'>
        <input
          id={`${boxName}-${boxNumber}`}
          aria-describedby={boxName}
          name={`${boxName}-${boxNumber}`}
          type='checkbox'
          checked={value.checked}
          onChange={onChange}
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label htmlFor='comments' className='font-medium text-gray-700'>
          {boxName}
        </label>
        <span id='comments-description' className='text-gray-500'>
          <span className='sr-only'>{boxName} </span>
          {boxText}
        </span>
      </div>
    </div>
  );
};
