console.log('app.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>This is JSX from app.js</h1>
        <p>This is some info</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Jeppe</h1>
        <p>34</p>
        <p>Denmark</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);