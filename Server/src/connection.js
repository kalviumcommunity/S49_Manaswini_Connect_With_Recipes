import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Replace YOUR_MONGODB_URI with your actual MongoDB connection string
        const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/your_database_name";
        
        const connection = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;