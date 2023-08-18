//webpack.config.js
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/main.ts",
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js" // <--- Will be compiled to this single file
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./manifest.json", to: "./manifest.json" }
            ],
        }),
    ],
};