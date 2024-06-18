import { models, Schema, model } from 'mongoose'

const FeatureSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Feature = models.Feature || model('Feature', FeatureSchema)
export default Feature