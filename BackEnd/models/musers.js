const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    usrNm:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    psWd:{
        type:String,
        require:true
    },
    usrTyp:{
        type:String,
        enum:['patient','doctor','nurse'],
        require:true
    }
},
{
    timestramps:true
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;