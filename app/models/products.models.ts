import mongoose from 'mongoose'

export const Product = mongoose.model(
    'Product',
    new mongoose.Schema({
        Description : String,
        Price: Number,
        Amount: Number
    })
)