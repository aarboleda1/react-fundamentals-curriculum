//get the element that was made in the index.html file
import React from 'react';
import {render} from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return(
			<h1>Hello World</h1>
		)
	}
}


//functional component
// const HelloWorld = props => (
//   <h1>Hiiiii</h1>
// );

render(
	<HelloWorld />,
	document.getElementById('app')
);


export default HelloWorld

// ReactDOM.render(<HelloWorld />, document.getElementById('app'));