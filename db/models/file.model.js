const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

  fileType: {
    type: String,
    required: true,
    enum: ['statement', 'blog', "announcements", "settings"],
    index: true
  },
  // Fields for 'statement' type
  
    sNumber: { type: Number, default: undefined },
    sTitle: { type: String, default: undefined },
    sImageUrl: { type: String, default: undefined },
    sDate: { type: Date, default: undefined },

  // Fields for 'blog' type
  
    blogTitle: { type: String, default: undefined },
    blogDate: { type: Date, default: undefined },
    blogBody: { type: String, default: undefined },
    mainImage: { type: String, default: undefined }, // Assuming this is a URL to an image

    //collection settings 
    settings : {
      statementsCurrentNumber:{type:Number,default:undefined},
      blogCurrentNumber:{type:Number,default:undefined},


    }

}, { timestamps: true });

const File = mongoose.models.File || mongoose.model('File', fileSchema);


module.exports = File;
