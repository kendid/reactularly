import { useState } from 'react';

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

  const addTodayHandler = (event) => {
    event.preventDefault();
    console.log("Add today");
    setCurrentHistory(prevHistory => {
      return [{date: new Date()}, ...prevHistory]
    })
  }

  const addYesterdayHandler = (event) => {
    event.preventDefault();
    setCurrentHistory(prevHistory => {
      return [{date: new Date(-1)}, ...prevHistory] // todo ken how to do yesterday
    })
  }

  const addDayHandler = (event) => {
    event.preventDefault();
    console.log("Add day"); // todo ken open modal?
  }

  function TaskView(props) {
    return (
      <>
      <div>
        <button onClick={addYesterdayHandler}>Add Yesterday</button>
        <button onClick={addTodayHandler}>Add Today</button>
        <button onClick={addDayHandler}>Add Day</button>
      </div>
      <div>{props.data.name}</div>
      <div>Interval: {props.data.interval}</div>
      <div>Next due: {props.data.due.toLocaleString()}</div>
      <ul>
        {currentHistory.map(h => {
          return <li key={h.taskId}>{h.date.toLocaleString()}</li>
        })}
      </ul>
      </>
    )
  }

  return <TaskView data={currentData} />;
}

export default RegularTaskView;
