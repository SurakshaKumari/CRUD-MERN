const mongoose = require('mongoose');
const schemaInfo = new mongoose.Schema({
    userid: {

        type: mongoose.Types.ObjectId,
        ref: "information",
      },
    name: {type: String},
    email: {type:String},
    image: {type:String}
});

//create model
const modelForthis = mongoose.model('information', schemaInfo);

module.exports = modelForthis;