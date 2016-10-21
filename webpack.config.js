//an object from the webpack plugin from package.json devDependencies
var HtmlWebpackPlugin = require("html-webpack-plugin")
//this is a new instance of the HtmlWebpackPlugin object
var HtmlWebpackPluginConfig = new HtmlWebpackPluginConfig({
	//config options for the new instance
	template: __dirname + "/app/index.html",
	//filename
	filename: "index.html",
	//to be injected into the body of the html document
	inject: "body"

})
//this is for the configuration of webpack
module.exports = {
	//main entry port for the app
	entry: [
		'./app/index.js'
	],
	//this will be the file that will be webpack will be running - dist and will bundle it to bundle.js
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	//here we are telling what the changes we want webpack to make on the code
	module: {
		//loaders tell which files- does not run changes on node-modules folder. uses babel. check .babelrc file
		loaders: [
		  {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	//a that babel will be transpiling
	plugins: [HtmlWebpackPluginConfig]

}

//What is happening?
/*
What is happening?

-When webpack runs, takes the index.js file at the entry 
-It will take all the code thru the converter/loaders, translating all the JSX to regular JavaScript
-It will output all of this code to the '/dist' under the filename index_bundle.js 
-Then plugins will run, taking the index.html file, injecting it into the same directory
- The index.html file will be able to reference the index_bundle.js file that was made by webpack
-The two will work together to configure the file and everyone is happy
*/