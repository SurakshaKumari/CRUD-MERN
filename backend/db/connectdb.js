const mongoose = require('mongoose')
const connectdb = async (db_url) => {
    try{
      const db_options = {dbname : "information"}
      await mongoose.connect(db_url, db_options);
      console.log('connected successfully');
    }
    catch(error){
console.log(error);
    }
};
//export default connectdb;

module.exports = connectdb;