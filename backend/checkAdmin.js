const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./models/User');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '.env') });

const checkAdmin = async () => {
    try {
        console.log('Connecting to DB:', process.env.MONGO_URI);
        await connectDB();

        const user = await User.findOne({ email: 'admin@example.com' });

        if (user) {
            console.log('Admin user FOUND in database.');
            console.log('Hashed Password:', user.password);
            console.log('Is Admin:', user.isAdmin);
        } else {
            console.log('Admin user NOT FOUND in database.');
        }

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

checkAdmin();
