//get the element that was made in the index.html file
var React = require('react');
var ReactDOM = require('react-dom');

// class HelloWorld extends React.Component {
// 	render() {
// 		return(
// 			<h1>Hello World</h1>
// 		)
// 	}
// }


//functional component
const HelloWorld = props => (
  <h1>Hello World</h1>
);

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
);




// ReactDOM.render(<HelloWorld />, document.getElementById('app'));