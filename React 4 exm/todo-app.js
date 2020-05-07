function Task(props) {
    return <li>{props.name}, {new Date().toLocaleTimeString()}</li>
}

class TodoList extends React.Component {
    addTask() {
        console.log("add task clicked");
        
    }
    render() {
        // return <h1>Todo List</h1>
        // const taskList = ;
        const taskElements = this.props.list.map((t) =>
            <Task name={t.name} />
        );
        return (
            <div>
                <h1>Todo List</h1>
                <ol>
                    {taskElements}
                </ol>
                <button onClick={this.addTask}>
                    Add Task
                </button>
            </div>
        );
    }
}

const tasks = [{name: "Welcome Task"}, {name: "first task"}];

ReactDOM.render(
    <TodoList list={tasks}/>,
    document.getElementById('root')
);