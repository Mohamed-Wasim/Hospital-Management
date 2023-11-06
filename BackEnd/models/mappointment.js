const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    ptnId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patients'
    },
    drId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctors'
    },
    nrsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'nures'
    },
    depId:{
        type:mongoose.schema.Types.ObjectId,
        ref:'departments'
    },
    status:{
        type:string,
        enum:['scheduled', 'canceled', 'completed'],
        require:true
    }
});

const appointmentModel = mongoose.module('appointments',appointmentSchema);
module.exports = appointmentModel;