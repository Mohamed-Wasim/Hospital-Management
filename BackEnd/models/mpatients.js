const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    usrId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    ptn:{
        ptnDtl:{
            gen:{
                type:String,
                require:true
            },
            dob:{
                type:Date,
                require:true
            },
            ctNo:{
                type:Number,
                requier:true
            },
            adrs:{
                type:string
            }
        }
    }
},
{
    timestamps:true
});

const patientModels = mongoose.model('patients',patientSchema);
module.exports = patientModels;