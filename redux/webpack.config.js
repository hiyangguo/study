/**
 * Created by Godfery on 2016/12/27.
 */
var path = require('path');
var webpack = require('webpack');

module.export = {
    devtool:'cheap-module-eval-source-map',
    entry:[
        './index'
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:''
    }
}
