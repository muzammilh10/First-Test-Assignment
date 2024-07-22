import React, { useState } from 'react';
import './App.css';
import Button from './Component/Button';
import CheckboxGroup from './Component/FormCheckboxLabel';

const App = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleAllPagesChange = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setCheckedItems({
      page1: isChecked,
      page2: isChecked,
      page3: isChecked,
      page4: isChecked,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevItems) => {
      const newItems = { ...prevItems, [name]: checked };
      const allChecked = Object.values(newItems).every(Boolean);
      setAllChecked(allChecked);
      return newItems;
    });
  };

  return (
    <div className="container">
      <div className="centered-div">
        <CheckboxGroup
          label="All Pages"
          checked={allChecked}
          onChange={handleAllPagesChange}
        />
        <div className="underline"></div>
        <CheckboxGroup
          label="Page 1"
          checked={checkedItems.page1}
          onChange={handleCheckboxChange}
          name="page1"
        />
        <CheckboxGroup
          label="Page 2"
          checked={checkedItems.page2}
          onChange={handleCheckboxChange}
          name="page2"
        />
        <CheckboxGroup
          label="Page 3"
          checked={checkedItems.page3}
          onChange={handleCheckboxChange}
          name="page3"
        />
        <CheckboxGroup
          label="Page 4"
          checked={checkedItems.page4}
          onChange={handleCheckboxChange}
          name="page4"
        />
        <div className="underline"></div>
        <Button>Done</Button>
      </div>
    </div>
  );
};

export default App;
