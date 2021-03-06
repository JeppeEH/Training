console.log('app.js is running!');

const app = {
    title: 'Indecisition App',
    subtitle: 'This is my subtitle',
    options: [] 
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
  app.options = [];  
  render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNum]
    alert(option);
};

const arr = ['Jeppe','Engell','Hansen'];
const numbers = [55, 101, 1000];

const appRoot = document.getElementById('app');

const render = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={onRemoveAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>

            {/* comment */}
            {
                numbers.map((number, i) => <p key={i}>number: {number}</p>)
            }
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })}
            </ol>
        </div>
    );


    ReactDOM.render(template, appRoot);
};

render();