'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX from app.js'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Jeppe'
    ),
    React.createElement(
        'p',
        null,
        '34'
    ),
    React.createElement(
        'p',
        null,
        'Denmark'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
