const uri = "mongodb+srv://chitaworn:admin@cluster0.foszj.mongodb.net/HealJaiDB?retryWrites=true&w=majority&appName=Cluster0";
const express = require("express");
const mongoose = require("mongoose")
const app = express()
const router = express.Router()
const port = 5000
const cors = require('cors');

const Books = require("./models/Books");
const Users = require("./models/Users");
const Mbti_types = require("./models/Mbti_types");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // สำหรับ form-urlencoded


mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
});


app.get('/', async (req, res) => {
  try {
    const userData = await Books.find();
    if (userData) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
});


app.get('/user/:id', async (req, res) => {
  try {
    const user_id = req.params.id;
    const userData = await Users.findOne({user_id:user_id});
    res.status(201).json(userData);

  } catch (err) {
    console.error('Failed to register book:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.post('/register', async (req, res) => {
  try {
      const {user_id} = req.body

      let userCreate = new Users({
        user_id: user_id,
        mbti_type: "",
        favorite: [null],
        history: [null],
      });

      userCreate.save();

    res.status(201).json({ message: "Book registered successfully"});

  } catch (err) {
    console.error('Failed to register book:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.get('/book/:id', async (req, res) => {
  try {

    const title = req.params.id;
    const bookData = await Books.findOne({title:title});
    res.status(201).json(bookData);

  } catch (err) {
    console.error('Failed to register book:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.listen(port, () => {
  console.log(`Server run on port ${port}`);
})