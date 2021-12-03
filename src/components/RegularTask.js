function RegularTask(props) {
    return (
      <div key={props.id} onClick={props.onSelect}>
        <div>{props.id}</div>
        <div>{props.name}</div>
      </div>
    );
}

export default RegularTask;