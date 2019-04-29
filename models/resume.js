const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    resumedata: {type: String, require: true},
});

module.exports = mongoose.model('resume', resumeSchema);