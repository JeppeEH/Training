console.log('app.js is running!');

var appObject = {
    title: 'Indecisition App',
    subtitle: 'This is my subtitle'
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Jeppe',
    age: 34,
    location: 'København'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);