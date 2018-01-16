console.log('app.js is running!');

const appObject = {
    title: 'Indecisition App',
    subtitle: 'This is my subtitle',
    options: ['One','Two'] 
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{appObject.title}</h1>
       {appObject.subtitle && <p>{appObject.subtitle}</p>}
       <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const addOne = () => {
    console.log('AddOne()')
};

const minusOne = () => { console.log('MinusOne');};

const setupReset = () => {
    console.log('reset');
};

let count = 0;
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>

        <button onClick={minusOne}>-1</button>
        <button onClick={setupReset}>Reset</button>
    </div>
);
console.log(templateTwo);

const appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(templateTwo, appRoot);