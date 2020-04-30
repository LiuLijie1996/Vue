let mongoose = require("mongoose");
let UserShchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  pwd:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('users', UserShchema);
