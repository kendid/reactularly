import classes from './TaskButtons.module.css';

function TaskButtons(props) {
    const addYesterdayHandler = (event) => {
        event.preventDefault();
        props.onAddDay(new Date(-1)); // todo ken how to do yesterday
    };

    const addTodayHandler = (event) => {
        event.preventDefault();
        props.onAddDay(new Date()); // todo ken how to do today
    };

    const addDayHandler = (event) => {
        event.preventDefault();
        props.onAddDay(new Date()); // todo ken open modal or so?
    };

    return <>
    <button onClick={addYesterdayHandler} className={classes.button}>Add Yesterday</button>
    <button onClick={addTodayHandler} className={classes.button}>Add Today</button>
    <button onClick={addDayHandler} className={classes.button}>Add Day</button>
  </>;
}

export default TaskButtons;