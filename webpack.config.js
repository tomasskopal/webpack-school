/**
 * webpack runs in node.js environment so we can use everything from it
 */
const  path = require('path'); // path from node.js

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'), // must be absolut filesystem path
		filename: 'bundle.js'
	},
	module: { // webpack 1 pouziva loaders, webpack 2 to pojmenovava module
		rules: [
			{
				use: 'babel-loader', // transpiluje ES6/7/8 do ES5
				test: /\.js$/ // test ocekava regex. Tento kontroluje, ze loader se pouzije pouze na soubory .js
			},
			{
				use: ['style-loader', 'css-loader'], // loadery jsou aplikovany z prava, takze vystup z css-loaderu je poslan do style-loaderu
				test: /\.css$/
			}
		]
	}
};

module.exports = config;