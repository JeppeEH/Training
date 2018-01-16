console.log('app.js is running!');

const app = {
    title: 'Indecisition App',
    subtitle: 'This is my subtitle',
    options: ['One','Two'] 
};

const onFormSubmit =(e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
       {app.subtitle && <p>{app.subtitle}</p>}
       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);