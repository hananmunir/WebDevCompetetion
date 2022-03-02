import mongoose from 'mongoose'


const weightSchema = mongoose.Schema({
    weight : Number,
    notes: String,
    createdAt : {
        type: Date,
        default: new Date()
    },
})

const weight =  mongoose.model('weight',weightSchema)

export default weight