const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    ptnId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients'
    },
    drId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctors'
    },
    mdRcId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'medicalRecords'
    },
    prDtls:{
        type:String,
        require:true
    },
    mdcn:{
        type:String,
        require:true
    },
    dosage:{
        type:String,
        require:true
    }
});

const prescriptionModel = mongoose.model('prescriptions',prescriptionSchema);
module.exports = prescriptionModel;