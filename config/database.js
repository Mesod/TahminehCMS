/**
 * Created by masood on 10/22/17.
 */
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog');

module.exports = mongoose.connection;