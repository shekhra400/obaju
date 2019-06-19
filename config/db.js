const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoDbURI');
const connectDB = async () => {

    try {
        const connection = await mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('dbconnected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
module.exports = connectDB;