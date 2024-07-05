import React, { useState } from 'react'
import Button from '../../UI/Button/Button';
import "./CourseInput.css";

const CourseInput = (props) => {
    const[enteredValue,setEnteredValue]=useState('');
    const[isValid,setIsValid]=useState(true);
    const goalInputChangeHandler=(e)=>
    {
        setEnteredValue(e.target.value);
        setIsValid(true)
    }
    const formSubmitHandler =(e)=>
    {
      if(enteredValue.trim().length===0)
      {
        e.preventDefault();
        setIsValid(false);
        return 0;
      }
        e.preventDefault();
        props.onAddGoal(enteredValue);
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?"invalid":null}`}>
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // style={{ background: !isValid ? "#FF9494" : null }}

        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput