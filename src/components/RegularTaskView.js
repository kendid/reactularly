import { useState } from 'react';
import TaskButtons from './TaskButtons';

import classes from "./RegularTaskView.module.css";

const DUMMY_DATA = [{
  taskid: 1,
  name: "Bettbezug wechseln",
  due: new Date(2021, 11, 8),
  interval: 14,
  history: [
    {date: new Date(2021, 10, 24)},
    {date: new Date(2021, 10, 10)}
  ]
},
{
  taskid: 2,
  name: "Encasing waschen",
  due: new Date(2021, 11, 22),
  interval: 42,
  history: [
    {date: new Date(2021, 10, 10)},
    {date: new Date(2021, 8, 29)}
  ]
}];

function RegularTaskView(props) {
  console.log("Regular Task View");
  const currentData = DUMMY_DATA.find(d => d.taskid === props.taskId);
  const [currentHistory, setCurrentHistory] = useState(currentData.history);

  const addDay = (day) => {
    console.log("Add day: " + day);
    setCurrentHistory(prevHistory => {
      return [{date: day}, ...prevHistory] 
    })
  }

  function TaskView(props) {
    return (
      <>
        <TaskButtons onAddDay={addDay} />
      <div>{props.data.name}</div>
      <div>Interval: {props.data.interval}</div>
      <div>Next due: {props.data.due.toLocaleDateString()}</div>
      <ul className={classes.dates}>
        {currentHistory.map(h => {
          return <li key={h.taskId}>{h.date.toLocaleDateString()}</li>
        })}
      </ul>
      </>
    )
  }

  return <TaskView data={currentData} />;
}

export default RegularTaskView;
