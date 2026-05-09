const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-71ltlcq-shard-00-00.rmm0bwf.mongodb.net:27017,ac-71ltlcq-shard-00-01.rmm0bwf.mongodb.net:27017,ac-71ltlcq-shard-00-02.rmm0bwf.mongodb.net:27017/?ssl=true&replicaSet=atlas-xjdwjc-shard-0&authSource=admin&appName=Cluster0`
        );

        console.log('Successfully connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

module.exports = connectToDatabase;
