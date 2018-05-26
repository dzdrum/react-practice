console.log('App.js is running!')

//JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>; under this is a version of the same statement that the browser understands
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js!"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);