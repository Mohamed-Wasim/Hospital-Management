const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    drId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    drInfo:{
        drNm:{
            type:String,
            require:true
        },
        gen:{
            type:String,
            require:true
        },
        spec:{
            type:String,
            require:true
        },
        dptId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'departments'
        },
        rting:{
            type:"String"
        }
    }
},
{
    timestamps:true
});

const doctorModle = mongoose.model('doctors',doctorSchema);
module.exports = doctorModle;