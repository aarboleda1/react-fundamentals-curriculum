module.exports = {
	//main entry port for the app
	entry: [
		'./app/index.js'
	],
	//this will be the file that will be webpack will be running - dist and will bundle it to bundle.js
	output: {
		path: __dirname + 'dist',
		filename: 'index_bundle.js'
	},

}