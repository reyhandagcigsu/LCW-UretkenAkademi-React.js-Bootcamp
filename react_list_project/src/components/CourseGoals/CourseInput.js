import React, { useState } from 'react';

import './CourseInput.css';
import Buttons from '../UI/Buttons';



const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 ) {
      setIsValid(false);
      return 
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Buttons type="submit">Add Goal</Buttons>
    </form>
  );
};

export default CourseInput;
