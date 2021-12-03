import RegularTask from "./RegularTask";

function RegularList(props) {
    return (
        <ul>
            {props.items.map(task => {
                const SelectHandler = (event) => {
                    event.preventDefault();
                    props.onSelect(task);
                }

                return <RegularTask key={task.id} id={task.id} name={task.name} onSelect={SelectHandler} />
            })}
        </ul>
    )
}

export default RegularList;