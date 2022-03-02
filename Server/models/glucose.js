import mongoose from 'mongoose'


const bloodPressureSchema = mongoose.Schema({
    systolic:Number,
    diastolic: Number,
    pulse: Boolean,
    measuredArm: String,
    notes: String,
    createdAt : {
        type: Date,
        default: new Date()
    },
})

const bloodPressure =  mongoose.model('bloodPressure',bloodPressureSchema)

export default bloodPressure