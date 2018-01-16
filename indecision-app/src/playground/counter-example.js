const addOne = () => {
    console.log('AddOne()', count);
    count++;
    renderCounterApp();
};

const minusOne = () => 
{
     console.log('MinusOne', count);
     count--;
     renderCounterApp();
};

const setupReset = () => {
    console.log('reset', count);
    count = 0;
    renderCounterApp();
};

let count = 0;

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={setupReset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();