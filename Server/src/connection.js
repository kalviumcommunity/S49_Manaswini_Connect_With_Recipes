import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGODB_URI;
        
        const connection = await mongoose.connect(connectionString);
        
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;