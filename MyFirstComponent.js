const className = 'box';
const element = React.createElement('div', {title: 'Outer div' },
    React.createElement('h1', {className}, 'Hello World!'));
ReactDOM.render(element, document.getElementById('contents'));