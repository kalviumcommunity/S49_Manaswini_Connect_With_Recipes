import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    }, 
    instructions: {
        type: [String],
        required: true,
    },
    imageUrl: {
        type: URL,
        required: true,
    },
    cookingTime: {
        type: Number,
        required: true,
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }
    
});

const RecipeModal = mongoose.model("Recipes", recipeSchema);  