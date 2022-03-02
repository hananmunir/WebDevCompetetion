import mongoose from 'mongoose'


const glucoseSchema = mongoose.Schema({
    sugarConcentration : Number,
    measured: String,
    notes: String,
    createdAt : {
        type: Date,
        default: new Date()
    },
})

const glucose =  mongoose.model('glucose',glucoseSchema)

export default glucose