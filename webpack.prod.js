// Webpack imports
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// Webpack config
module.exports = {
  // By setting the mode parameter to either development, production or none,
  // you can enable webpack's built-in optimizations that correspond to each environment.
  mode: 'production',
  // Entry point for application, where webpack starts to build its dependency graph
  // Below we set the property to an object
  entry: {
    // Each key value pair represents the point where to start the application bundling process.
    // Key = name of entry point also specifies chunk name , value = entry point file
    index: path.resolve(__dirname, 'client/src/index.js'),
  },
  // The output property tells webpack where to emit the bundles it creates
  // and how to name these files.
  output: {
    // Directory of bundle
    path: path.resolve(__dirname, 'client/dist'),
    // File output
    // Specify [name] inside square brackets, tells webpack to use the key in the entry point as the name for the output file
    filename: '[name].js'
  },
  // These options determine how the different types of modules within a project will be treated
  module: {
    // Define the rules for how the different modules will be treated
    rules: [
      // CSS loader
      {
        // The test property identifies which file or files should be transformed.
        // In this case files ending with the .css extension
        test: /\.css$/,
             // The use property indicates which loader should be used to do the transforming.
            // css-loader reads the content of css file and returns its content 
            // MiniCssExtract-loader takes the css and injects it into the css file specified by the plugin instance
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      // JS loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
          'babel-loader',
        ],
      },
    ],
  },
  // Plugin configurations
  plugins: [
    // The plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
    new HtmlWebpackPlugin({
      // Specify which bundle to include or hook up to the html page
      // The string represents the chunk name which is specified as the key in the entry object
      chunks: 'index',
      // filename
      filename: '[name].html',
      // Html file to use as template
      template: path.resolve(__dirname, 'client/src/index.html'),
    }),
    // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
    new MiniCssExtractPlugin({
      // Specify the file name
      filename: '[name].css'
    }),
    // Copies individual files or entire directories, which already exist, to the build directory.
    new CopyPlugin({
      // Specify file related patterns for plugin
      patterns: [
        // from what destionation to what destination
        { from: 'client/src/assets', to: "assets" },
      ],
    }),
  ],
};