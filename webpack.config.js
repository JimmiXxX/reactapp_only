const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const path = require( 'path' )
module.exports = {
    mode: "production",
    entry: path.resolve( __dirname, 'src', 'index.tsx' ),
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: "[name].[contenthash].tsx",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin( {template: path.resolve( __dirname, 'public', 'index.html' )} ),

    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}