const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/fetcher';

const db = mongoose.connect(mongoUri);

module.exports = db;
