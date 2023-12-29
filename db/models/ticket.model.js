import mongoose from 'mongoose'
import validator from 'validator'

const ticketSchema = mongoose.Schema({
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
    fristName:{
        type:String,
        trim:true,
        default:"your name",
        maxlength:[50,'your name is too long'],

    },
    lastName:{
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

const  Ticket = mongoose.models.Ticket || mongoose.model("Tickets", userSchema);


export default Ticket