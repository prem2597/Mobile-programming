// class Hello extends React.Component {
//     render() {
//         return (
//             <h1>Hello {this.props.name}!</h1>
//             // {this.props.name || "kumar"}
//         );
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Hello name="Prem" />
//                 <Hello name="Revathi" />
//             </div>
//         );
//     }
// }

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }

    handleClick = () => {
        alert("Hi")
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
