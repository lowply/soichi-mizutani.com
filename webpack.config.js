const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: "./public/assets/build/[name].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = [
	{
		entry: './src/js/main.jsx',
		output: {
			filename: './public/assets/build/main.js'
		},
		module: {
			rules: [{
				test: /.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}],
		}
	},
	{
		entry: './src/sass/main.sass',
		output: {
			filename: './public/assets/build/main.css'
		},
		module: {
			rules: [{
				test: /\.sass$/,
				use: extractSass.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					// use style-loader in development
					fallback: "style-loader"
				})
			}],
		},
		plugins: [
			extractSass
		],
	}
];
