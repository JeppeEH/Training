'use strict';

console.log('app.js is running!');

var appObject = {
    title: 'Indecisition App',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    appObject.subtitle && React.createElement(
        'p',
        null,
        appObject.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObject.options.length > 0 ? 'Here are your options' : 'No options'
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

var addOne = function addOne() {
    console.log('AddOne()');
};

var minusOne = function minusOne() {
    console.log('MinusOne');
};

var setupReset = function setupReset() {
    console.log('reset');
};

var count = 0;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: setupReset },
        'Reset'
    )
);
console.log(templateTwo);

var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(templateTwo, appRoot);
