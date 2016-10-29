var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer')

var styles = {
	container: {
		backgroundSize: 'cover',
		backgroundImage: "url('app/images/pattern.svg')",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alginItem: 'center',
		height: '100%',
		width: '100%'

	},
	header: {
		fontSize: 40,
		color: '#fff',
		fontWeight: 100,
	}
}

function Home (props) {
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>Enter City and State</h1>
			<GetCityContainer />
		</div>
	) 
}

module.exports = Home;