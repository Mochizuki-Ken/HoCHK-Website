const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { webpack } = require("webpack")

module.exports = {
    devtool:"eval-source-map",
    entry:"./src/index.js",

    output:{
        path:path.join(__dirname,'/build'),
        filename:"index.js"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html"

        }),
        new TerserWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'index.css'
        })
    ],

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },{
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:"[local]"
                            }
                        }
                    }
                ]
            },{
                test:/\.png$/,
                type:'asset/resource'
            }
        ]
    },
    devServer:{
        port:3000
    }
}