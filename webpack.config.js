const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

	module: {
			rules: [
				{
					test: /\.js$/,
					exclude: ['/node_modules/'],
					use: [{
						loader: 'babel-loader',
						options: { presets: ['es2015'] },
					}],
				},
				{
					test: /\.css$/,
					use:  ExtractTextPlugin.extract({
	          use: [{
	            loader: 'css-loader',
	            options: { importLoaders: 1 },
	          	}],
	        	}),
				},
				{
        	test: /\.(sass|scss)$/,

					loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])

      	},
			],
	},

	plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};