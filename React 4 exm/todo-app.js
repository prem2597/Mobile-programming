function Task(props) {
    return <li>{props.name}, {props.dueDate.toLocaleTimeString()}</li>
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: props.list};
        this.addTask = this.addTask.bind(this);
    }
    addTask(taskList) {
        console.log("add task clicked");
        this.setState({list: taskList})
    }
    render() {
        const taskList = this.state.list;
        return (
            <div>
                <h1>Todo List</h1>
                <ol>
                    {
                        this.props.list.map((t) =>
                            <Task key={t.id} name={t.name} dueDate={t.dueDate} />
                        )
                    }
                </ol>
                <TaskNameForm taskList={taskList} onAddTask={this.addTask} />
            </div>
        );
    }
}

class TaskNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        const taskList = this.props.taskList;
        event.preventDefault();
        taskList.push({id:Date.now(), name: this.state.value,
        dueDate: new Date()});
        this.props.onAddTask(taskList);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value}
                onChange = {this.handleChange}/>
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}

const tasks = [
    {id:0, name: "Welcome Task"},
    {id:1, name: "first task"},
    {id:2, name: "first task"},
    {id:3, name: "first task"},
];

ReactDOM.render(
    <TodoList list={tasks}/>,
    document.getElementById('root')
);