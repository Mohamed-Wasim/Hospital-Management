const userModel = require('../models/musers');

const registerUsr = async (req,res)=>{
    try{
        //  --- check the request details is messign --- !
        if(!req.body.usrNm || !req.body.email || !req.body.psWd || !req.body.usrTyp)
        return res.status(200).json({message:`user details is messing`});

        // --- find duplicate --- !
        const usrQry = {
            email:req.body.email
        }
       const exstUsr = await userModel.find(usrQry);
       if(exstUsr && exstUsr.length && exstUsr.length > 0)
            return res.status(200).json({message:`The user mail is already exist`});

        // --- save the user details --- !
        const nuUsr = userModel({
            usrNm:req.body.usrNm,
            email:req.body.email,
            psWd:req.body.psWd,
            usrTyp:req.body.usrTyp,
        });

        await nuUsr.save();
        res.status(201).json({count:nuUsr.length,message:`data created success fully`});

    }catch(err){
        console.log(err);
        res.status(500).json({message:`Internal server error`});
    }
}

module.exports = registerUsr;