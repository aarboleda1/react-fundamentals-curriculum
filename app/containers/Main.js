var React = require('react');
var GetCityContainer = require('./GetCityContainer');
var GetCity = require('../components/GetCity');
//this is the styling for the page- used by making a 'style' object then creating a component, wrapping other compontnest in it so they inherit the style
var styles = {
	container: {
		width: "100%",
		height: "92%"

	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: "#939b9e",
		padding: 1,
	}	
}

var Main = React.createClass({
	render: function () {

	  return( 
	  <div style={styles.container}>
		<div style={styles.header}>

			<h2>WeatherApp</h2>
			<GetCityContainer direction="row" float="right" />
		</div>
			{this.props.children}
	  </div>	
	  )	
	  
	}
})


module.exports = Main;