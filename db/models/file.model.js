const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileType: {
    type: String,
    required: true,
    enum: ['statement', 'blog', "announcements"],
    index: true
  },
  // Fields for 'statement' type
  statement: {
    number: { type: String, default: undefined },
    title: { type: String, default: undefined },
    image: { type: String, default: undefined },
    date: { type: Date, default: undefined }
  },
  // Fields for 'blog' type
  blog: {
    title: { type: String, default: undefined },
    date: { type: Date, default: undefined },
    body: { type: String, default: undefined },
    mainImage: { type: String, default: undefined } // Assuming this is a URL to an image
  }
});

const File = mongoose.models.File || mongoose.model('File', fileSchema);


module.exports = File;
