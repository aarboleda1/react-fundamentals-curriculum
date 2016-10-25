//get the element that was made in the index.html file
import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import {render} from 'react-dom'

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

render((
	<Router history={hashHistory}>
	  <Route path="/" component={app} />
	</Router>
), document.getElementById('app'));


export default HelloWorld

// ReactDOM.render(<HelloWorld />, document.getElementById('app'));