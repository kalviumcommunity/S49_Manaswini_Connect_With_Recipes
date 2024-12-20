import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        const connectionString = process.env.MONGODB_URI;
        
        const connection = await mongoose.connect(connectionString, {
            dbName: 'Recipes' // Explicitly set the database name
        });
        
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;