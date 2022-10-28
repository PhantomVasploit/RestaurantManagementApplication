const mongoose = require('mongoose')

const {Schema} = mongoose
const mpesaTranscationSchema = new Schema(
    {
        number: {
            type: String,
            required: [true, 'Number field is required']
        },
        transaction_id: {
            type: String,
            required: [true, 'Transaction ID field is required']
        },
        amount: {
            type: String,
            required: [true, 'Amount field is required']
        }
    },
    { timestamps: true }
)

const MPesaTransaction = mongoose.model('MPesaTransaction', mpesaTranscationSchema)
module.exports = MPesaTransaction