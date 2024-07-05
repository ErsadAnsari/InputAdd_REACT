import React, { useState } from 'react'
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
    { text: "Ersad ahamed ansari", id: "e1" },
  ]);
   const addGoalHandler=(enterText)=>
   {
    setCourseGoals((prevGoals)=>{
      const updateGoals=[...prevGoals];
      updateGoals.unshift({text:enterText,id:Math.random().toString()});
      return updateGoals;

    })
   }
   const deleteItemHandler = goalId => {
    setCourseGoals((prev)=>{
      const updateGoals=prev.filter(goal=>goal.id!=goalId);
      return updateGoals;
    })
   }
let content = (
  <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
);
if(courseGoals.length>0)
{
  content=(<CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>);
}
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
}

export default App