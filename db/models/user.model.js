import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = mongoose.Schema({
    email:{
        required:[true,'email is required dude'],
        type:String,
        maxlength:30,
        unique:true,
        trim:true,
        validate:(value)=>{
          if (!validator.isEmail(value)) {
             throw new Error("email is not valid ***mongoose schema")
          }
        }

    },
    password:{
        required:[true,"password is required dude, mongose schema"],
        type:String,
        trim:true
    },
    firstname:{
        type:String,
        trim:true,
        default:"your name",
        maxlength:[50,'your name is too long'],

    },
    lastname:{
        type:String,
        trim:true,
        default:"your last name",
        maxlength:[50,'your name is too long'],
        
    },

role:{
    type:String,
    default:"user",
    enum:{
        values:['user','admin'],
        message:"role is not supported"
    },
}

});

const  User= mongoose.models.User || mongoose.model("User", userSchema);


export default User