import { useState, useRef } from "react";
import Editable from "./Editable";

function RegularTaskView(props) {
  console.log(props.item.name);
  //const [editingValue, setEditingValue] = useState(props.item.name);
  const nameInputRef = useRef(props.item.name);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required defaultValue={props.value} ref={nameInputRef} />
        </div>
      </form>
    </div>
  );
}

export default RegularTaskView;
