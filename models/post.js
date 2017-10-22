/**
 * Created by masood on 10/22/17.
 */
let mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    title: String,
    text: Sting,
    author: String,
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{body: String, date: Date}],
    keywords: [String]
});

let postModel = mongoose.model('Post', postSchema);

