const express = require("express");
const multer = require("multer");
const Student = require("../models/Student");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/", upload.single("profilePic"), async (req, res) => {
  try {
    const newStudent = new Student({
      ...req.body,
      profilePic: req.file ? `/uploads/${req.file.filename}` : "",
    });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.get("/:course", async (req, res) => {
  const students = await Student.find({ course: req.params.course });
  res.json(students);
});

module.exports = router;
