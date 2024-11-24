const mongoose = require('mongoose');
require('dotenv').config();

const database = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, );
        console.log('Veritabanına bağlandı');
    } catch (err) {
        console.error('Veritabanına bağlanmadı:', err);
        process.exit(1);
    }
};

module.exports = database;
