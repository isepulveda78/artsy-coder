import { Schema, model, models} from 'mongoose'

const DocumenationSchema = new Schema({
    theme: {
        type: Schema.Types.ObjectId,
        ref: 'theme',
        required: true
    },
    pageText: {
        type: String
    }
},
    {
        timestamps: true
    }
)

    const Documenation = models.Documenation || model('Documenation', DocumenationSchema)
    export default Documenation