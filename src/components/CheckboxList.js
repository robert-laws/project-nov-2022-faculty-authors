import React, { useState, useCallback } from 'react';
import { Checkbox } from './Checkbox';

export const CheckboxList = ({ listName, boxItems, checkedList }) => {
  const [checkBoxes, setCheckBoxes] = useState([]);

  const checkChange = useCallback((box) => {
    if (box.checked === true) {
      setCheckBoxes((prevState) => {
        return [...prevState, box.number];
      });
    } else {
      setCheckBoxes((prevState) => {
        return prevState.filter((item) => item !== box.number);
      });
    }
  }, []);

  // useEffect(() => {
  //   onInput(listName, checkBoxes);
  // }, [listName, checkBoxes, onInput]);

  console.log(checkBoxes);

  return (
    <fieldset className='space-y-5'>
      <legend className='sr-only'>{listName}</legend>
      {boxItems.map((item, index) => (
        <Checkbox
          key={index}
          boxNumber={index}
          boxName={item[0]}
          boxText={` (${item[1]})`}
          checked={checkedList.includes(parseInt(item.id)) ? true : false}
          checkChange={checkChange}
        />
      ))}
    </fieldset>
  );
};
