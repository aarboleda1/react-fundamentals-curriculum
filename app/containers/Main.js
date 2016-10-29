var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
	container: {
		width: "100%",
		height: "92%"
	}
}

var Main = React.createClass({
	render: function () {
	  return( 
		<div style={styles.container}>
			<h1>GetMyWeather</h1>
			{this.props.children}
		</div>
	  )	
	  
	}
})


module.exports = Main;