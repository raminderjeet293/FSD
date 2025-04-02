const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  address: String,
  university_name: String,
  stream: String,
  score_in_last_program: Number,
  course: String,
  section: String,
  year: Number,
  profilePic: String,
});

module.exports = mongoose.model("Student", StudentSchema);
