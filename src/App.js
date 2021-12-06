import { useState } from "react";

import './App.css';
import RegularList from './components/RegularList';
import RegularTaskView from "./components/RegularTaskView";

const DUMMY_DATA = [{
  taskid: 1,
  name: "Bettbezug wechseln",
  due: new Date(2021, 11, 8)
},
{
  taskid: 2,
  name: "Encasing waschen",
  due: new Date(2021, 11, 22)
}];

function App() {
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const selectItemHandler = (item) => {
    //console.log("Set current item: " + item.name);
    setCurrentTaskId(item.taskid);
  }

  return (
    <div className="App">
      <RegularList items={DUMMY_DATA} onSelect={selectItemHandler} />
      {currentTaskId !== null && <RegularTaskView taskId={currentTaskId} />}
    </div>
  );
}

export default App;
