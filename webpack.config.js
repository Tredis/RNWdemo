const webpack = require('webpack');

module.exports = {
    entry: [/*'babel-polyfill',*/ './index.web.js'],//{ // need babel-polyfill here for sagas
    //     main: ['babel-polyfill', './index.web.js'],
    // },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules\/react-datetime/,
                    /node_modules\/react-dropdown/,
                    /node_modules\/input-moment/,
                    /node_modules\/react-input-slider/,
                    /node_modules\/moment/,
                    /node_modules\/react-datetime-calendar/,
                    /node_modules\/react-native-web/
                ],
                include: [/node_modules/, /source/],
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react-native'],
                    //plugins: ["transform-react-remove-prop-types", 'transform-runtime']
                }
            }, {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                //loaders: [
                loader: 'file-loader',
                  options: {
                    name: '[path][name].[hash].[ext]',
                  },
                  //'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  //'image-webpack-loader?bypassOnDebug'
                //]
            // }, {
            //     test: /favicon\.ico$/,
            //     loader: 'url',
            //     query: { 
            //       limit: 0,
            //       //name: '[name].[ext]',
            //     },
            }
        ]
    },
    resolve: {
        alias: {
            "react-native": "react-native-web",
            //'react-navigation': 'react-navigation/lib/react-navigation.js',
        },
        extensions: [ '.web.js', '.js' ]
    }
};