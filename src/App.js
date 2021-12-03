import { useState } from "react";

import './App.css';
import RegularList from './components/RegularList';
import RegularTaskView from "./components/RegularTaskView";

const DUMMY_DATA = [{
  id: 1,
  name: "bla"
},
{
  id: 2,
  name: "task"
}];

function App() {
  const [currentItem, setCurrentItem] = useState(null);

  const selectItemHandler = (item) => {
    console.log("Set current item: " + item.name);
    setCurrentItem(item);
  }

  return (
    <div className="App">
      <RegularList items={DUMMY_DATA} onSelect={selectItemHandler} />
      {currentItem !== null && <RegularTaskView item={currentItem} />}
    </div>
  );
}

export default App;
