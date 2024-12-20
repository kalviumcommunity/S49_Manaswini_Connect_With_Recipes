import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username });
        //checking is the user already exists in the database
        if (user) {
            console.log('User already exists');
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserModel({ username, password: hashedPassword });

        //to save the user in the database
        const savedUser = await newUser.save();

        res.json({ message: "Hey buddy! congratulations! you are registered successfully! Yay!" });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
});

router.post('/login', async (req, res) => { 
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username });
        //checking if the user exists in the database
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: 'Hey buddy! I think you need to signup :)' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        //checking if the password is correct
        if (!validPassword) {
            console.log('Try to remeber your password! You can do it!');
            return res.status(400).json({ message: 'Think again!' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
            }
        });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
});
export { router as userRouter };