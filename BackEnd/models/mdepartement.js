const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departementSchema = new Schema({
    drId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctors'
    },
    dptNm:{
        type:String,
        require:true
    },
    dptDtl:{
        type:String,
        require:true
    }
},
{
    timestamps:true
}
);

const departmentModel = mongoose.model('department',departementSchema);
module.exports = departmentModel;