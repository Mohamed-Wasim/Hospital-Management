const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicalPaymentSchema = new Schema({
    ptnId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients'
    },
    billDt:{
        type:String,
        require:true
    },
    totlAm:{
        type:String,
        require:true
    },
    paySts:{
        type:['paid','unpaid'],
        require:true
    }
});

const medicalPaymentModel = mongoose.model('medicalPayment',medicalPaymentSchema);
module.exports = medicalPaymentModel;
