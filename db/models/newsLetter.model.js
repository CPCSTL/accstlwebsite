const { default: mongoose } = require("mongoose");




const newsLetterSchema = new mongoose.Schema({
    email:{
        require:[true, 'email is required dude'],
        unique:[true, " email must be unique"],
        type:String
        
    }
})

const NewsLetter = mongoose.models.NewsLetter || mongoose.model("NewsLetter", newsLetterSchema)

export default NewsLetter;