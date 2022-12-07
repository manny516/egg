const mongoose = require('mongoose');

const ageDate = new mongoose.Schema({
    domain : String,
    mature: Number,
    age : Number
});


export const ageContent = mongoose.model('age_search',ageDate);