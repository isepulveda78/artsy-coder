import { Schema, model, models} from 'mongoose'

const DocumenationSchema = new Schema({
    theme: {
        type: String,
        required: true,
    },
    pageText: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

    const Documenation = models.Documenation || model('Documenation', DocumenationSchema)
    export default Documenation