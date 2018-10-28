const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                }),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({template: "my-component.html"}),
        new StyleLintPlugin({}),
		new DashboardPlugin()
   ],
}