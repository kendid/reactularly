import RegularTask from "./RegularTask";

import classes from './RegularList.module.css';

function RegularList(props) {
    return (
        <ul className={classes.list}>
            {props.items.map(task => {
                const SelectHandler = (event) => {
                    event.preventDefault();
                    props.onSelect(task);
                }

                return <RegularTask key={task.taskid} id={task.taskid} name={task.name} due={task.due} onSelect={SelectHandler} />
            })}
        </ul>
    )
}

export default RegularList;