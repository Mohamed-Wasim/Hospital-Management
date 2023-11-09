const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicalServiesSchema = new Schema({
    mduNm:{
        type:String,
        require:true
    },
    prcId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'prescriptions'
    },
    drId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctors'
    },
    ptnId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients'
    },
    dosage:{
        type:String,
        require:true
    },
    payId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'medicalpayments'
    }
});

const medicalServicesModel = mongoose.model('medicalservices',medicalServiesSchema);
module.exports = medicalServicesModel;