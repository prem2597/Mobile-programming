function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "Prem",
    lastName: "Kumar"
}

// const name = "Prem"
const e = (
    <h1>
        Hello, {formatName(user)}!
    </h1>);

ReactDOM.render(
    e,
    document.getElementById('root')
);