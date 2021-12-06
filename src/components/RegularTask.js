import classes from './RegularTask.module.css';

function RegularTask(props) {
    return (
      <div key={props.id} onClick={props.onSelect} className={classes.task}>
        <div>{props.name}</div>
        <div>next due {props.due.toLocaleString()}</div>
      </div>
    );
}

export default RegularTask;