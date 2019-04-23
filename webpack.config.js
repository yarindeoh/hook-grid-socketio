'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        performance: { hints: false },
        mode: argv.mode,
        entry: path.resolve(__dirname, 'src/index.tsx'),
        devtool: argv.mode === 'development' ? 'eval-source-map' : 'none',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                containers: path.resolve(__dirname, 'src/containers'),
                resources: path.resolve(__dirname, 'resources'),
                services: path.resolve(__dirname, 'src/services')
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.(css|scss)$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader'],
                    include: path.resolve(__dirname, '../')
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'index.html')
            })
        ],
        devServer: {
            compress: true,
            port: 9000
        }
    };
};
