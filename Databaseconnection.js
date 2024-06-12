// require('dotenv').config();
// const mongoose = require('mongoose'); 
// //const MONGODB_URL = process.env.MONGODB_URL;


// const databaseConnect = async () => {
//     try {
//         await mongoose.connect('database link ', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.error('Database connection failed:', error);
//         process.exit(1);
//     }
// };

// module.exports = databaseConnect;

 

require('dotenv').config();
const mongoose = require("mongoose");
const MONGODB_URL =process.env.MONGODB_URL || "mongodb://localhost:27017/my_database";

// mongoDb database connection
const databaseconnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

module.exports = databaseconnect;
