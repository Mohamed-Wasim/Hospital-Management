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
        type:string,
        require:true
    },
    usrTyp:{
        type:String,
        require:true
    }
},
{
    timestramps:true
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;