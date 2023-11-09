const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicalRecordsSchema = new Schema({
    ptnId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients'
    },
    drId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctors',
    },
    recDta:{
        type:String,
        require:true
    },
    dgnsis:{
        type:String,
        require:true
    },
    trtmnt:{
        type:String,
        require:true
    },
    otrmInfo:{
        type:String,
        require:true
    }
});

const medicalRecordsModel = mongoose.model('medicalRecords',medicalRecordsSchema);
module.exports = medicalRecordsModel;