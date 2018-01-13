console.log('app.js is running!');

var appObject = {
    title: 'Indecisition App',
    subtitle: 'This is my subtitle',
    options: ['One','Two'] 
};

// JSX - JavaScript XML
var template = (
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

var user = {
    name: 'Jeppe',
    age: 18,
    location: 'København'
};

function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>;
    }
}


var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Ingen'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);