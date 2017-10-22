const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './app.js',
	},
	output: {
		filename: '[name].buddle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/assets',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
	},
};