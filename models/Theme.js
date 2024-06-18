import { Schema, model, models } from 'mongoose'

const ThemeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Theme name is required']
    },
    description: {
        type: String,
        required: [true, 'Theme description is required']
    },
    demo: {
        type: String
    },
    documentation: {
        type: String
    },
    features: [
        {
            type: String
        }
    ]
})

const Theme = models.Theme || model('Theme', ThemeSchema)

export default Theme