const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nurseSchema = new Schema({
    nrsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    nrsDtl:{
        nrsNm:{
            type:String,
            require:true
        },
        gen:{
            type:String,
            require:true
        },
        dptId:{
            type:mongoose.Schema.Types.ObjectId,
            require:true
        },
        rting:{
            type:"String"
        }
    }
});

const nurseModel = mongoose.model('nures',nurseSchema);
module.exports = nurseModel;