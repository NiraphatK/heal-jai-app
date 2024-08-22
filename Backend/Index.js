const uri = "mongodb+srv://chitaworn:admin@cluster0.foszj.mongodb.net/HealJaiDB?retryWrites=true&w=majority&appName=Cluster0";
const express = require("express");
const mongoose = require("mongoose")
const app = express()
const router = express.Router()
const port = 5000
const cors = require('cors');
app.use(cors());

const Books = require("./models/Books");

mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
});

const data = [
    {
      "title": "Radical Acceptance",
      "type": ["INFJ", "INFP", "ENFJ"],
      "author": "Tara Brach",
      "cover": "https://images.example.com/radical_acceptance.jpg"
    },
    {
      "title": "Start with Why",
      "type": ["ENTJ", "INTJ", "ENFP"],
      "author": "Simon Sinek",
      "cover": "https://images.example.com/start_with_why.jpg"
    },
    {
      "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
      "type": ["INFJ", "INFP", "ISFP"],
      "author": "Susan Cain",
      "cover": "https://images.example.com/quiet.jpg"
    },
    {
      "title": "The Innovator's Dilemma",
      "type": ["INTJ", "ENTJ", "INFP"],
      "author": "Clayton Christensen",
      "cover": "https://images.example.com/innovators_dilemma.jpg"
    },
    {
      "title": "Drive: The Surprising Truth About What Motivates Us",
      "type": ["ENTP", "INTP", "ENFP"],
      "author": "Daniel H. Pink",
      "cover": "https://images.example.com/drive.jpg"
    },
    {
      "title": "The Untethered Soul",
      "type": ["INFJ", "INFP", "ENFP"],
      "author": "Michael A. Singer",
      "cover": "https://images.example.com/untethered_soul.jpg"
    },
    {
      "title": "The Courage to Be Disliked",
      "type": ["INFP", "INFJ", "ENFJ"],
      "author": "Ichiro Kishimi",
      "cover": "https://images.example.com/courage_to_be_disliked.jpg"
    },
    {
      "title": "How to Win Friends and Influence People",
      "type": ["ESFJ", "ENFJ", "ESTJ"],
      "author": "Dale Carnegie",
      "cover": "https://images.example.com/win_friends.jpg"
    },
    {
      "title": "The 5 Levels of Leadership",
      "type": ["ENTJ", "ESTJ", "ISFJ"],
      "author": "John C. Maxwell",
      "cover": "https://images.example.com/5_levels_leadership.jpg"
    },
    {
      "title": "The Book Thief",
      "type": ["ISFP", "INFP", "INFJ"],
      "author": "Markus Zusak",
      "cover": "https://images.example.com/book_thief.jpg"
    },
    {
      "title": "Born a Crime",
      "type": ["ENTP", "ENFP", "ESFP"],
      "author": "Trevor Noah",
      "cover": "https://images.example.com/born_a_crime.jpg"
    },
    {
      "title": "Outliers: The Story of Success",
      "type": ["INTJ", "ENTP", "ESTJ"],
      "author": "Malcolm Gladwell",
      "cover": "https://images.example.com/outliers.jpg"
    },
    {
      "title": "The 7 Habits of Highly Effective People",
      "type": ["ESTJ", "ENTJ", "ISFJ"],
      "author": "Stephen R. Covey",
      "cover": "https://images.example.com/7_habits.jpg"
    },
    {
      "title": "Educated",
      "type": ["INTJ", "INFJ", "INFP"],
      "author": "Tara Westover",
      "cover": "https://images.example.com/educated.jpg"
    },
    {
      "title": "Atomic Habits",
      "type": ["INTJ", "ESTJ", "ENTP"],
      "author": "James Clear",
      "cover": "https://images.example.com/atomic_habits.jpg"
    },
    {
      "title": "The Subtle Art of Not Giving a F*ck",
      "type": ["ENTP", "INTP", "ESTP"],
      "author": "Mark Manson",
      "cover": "https://images.example.com/subtle_art.jpg"
    },
    {
      "title": "The Alchemist",
      "type": ["INFP", "INFJ", "ENFP"],
      "author": "Paulo Coelho",
      "cover": "https://images.example.com/alchemist.jpg"
    },
    {
      "title": "Grit: The Power of Passion and Perseverance",
      "type": ["ESTP", "ENTJ", "ENFJ"],
      "author": "Angela Duckworth",
      "cover": "https://images.example.com/grit.jpg"
    },
    {
      "title": "The 4-Hour Workweek",
      "type": ["ENTP", "INTP", "ESTP"],
      "author": "Tim Ferriss",
      "cover": "https://images.example.com/4_hour_workweek.jpg"
    },
    {
      "title": "The Little Prince",
      "type": ["INFP", "INFJ", "ISFP"],
      "author": "Antoine de Saint-Exupéry",
      "cover": "https://images.example.com/little_prince.jpg"
    },
    {
      "title": "The Power of Now",
      "type": ["INFJ", "INFP", "ENFP"],
      "author": "Eckhart Tolle",
      "cover": "https://images.example.com/power_of_now.jpg"
    },
    {
      "title": "The Book of Joy",
      "type": ["ENFJ", "INFJ", "ISFP"],
      "author": "Dalai Lama & Desmond Tutu",
      "cover": "https://images.example.com/book_of_joy.jpg"
    },
    {
      "title": "Thinking, Fast and Slow",
      "type": ["INTP", "INTJ", "ENTP"],
      "author": "Daniel Kahneman",
      "cover": "https://images.example.com/thinking_fast_and_slow.jpg"
    },
    {
      "title": "The Art of War",
      "type": ["INTJ", "ENTJ", "ESTJ"],
      "author": "Sun Tzu",
      "cover": "https://images.example.com/art_of_war.jpg"
    },
    {
      "title": "The Art of Happiness",
      "type": ["INFJ", "ENFJ", "INFP"],
      "author": "Dalai Lama",
      "cover": "https://images.example.com/art_of_happiness.jpg"
    },
    {
      "title": "The Four Agreements",
      "type": ["INFP", "INFJ", "ENFP"],
      "author": "Don Miguel Ruiz",
      "cover": "https://images.example.com/four_agreements.jpg"
    },
    {
      "title": "The E-Myth Revisited",
      "type": ["ESTJ", "ENTJ", "INTJ"],
      "author": "Michael E. Gerber",
      "cover": "https://images.example.com/e_myth_revisited.jpg"
    },
    {
      "title": "The Happiness Project",
      "type": ["ESFP", "ENFP", "ENFJ"],
      "author": "Gretchen Rubin",
      "cover": "https://images.example.com/happiness_project.jpg"
    },
    {
      "title": "Dare to Lead",
      "type": ["ENFJ", "INFJ", "ISFJ"],
      "author": "Brené Brown",
      "cover": "https://images.example.com/dare_to_lead.jpg"
    },
    {
      "title": "The Great Gatsby",
      "type": ["INFP", "INFJ", "ISFP"],
      "author": "F. Scott Fitzgerald",
      "cover": "https://images.example.com/great_gatsby.jpg"
    },
    {
      "title": "Pride and Prejudice",
      "type": ["ISFJ", "INFJ", "INFP"],
      "author": "Jane Austen",
      "cover": "https://images.example.com/pride_and_prejudice.jpg"
    },
    {
      "title": "The Catcher in the Rye",
      "type": ["INFP", "INFJ", "ISFP"],
      "author": "J.D. Salinger",
      "cover": "https://images.example.com/catcher_in_the_rye.jpg"
    },
    {
      "title": "The Outsiders",
      "type": ["ISFP", "INFP", "ESTP"],
      "author": "S.E. Hinton",
      "cover": "https://images.example.com/outsiders.jpg"
    },
    {
      "title": "The War of Art",
      "type": ["INTJ", "ENTP", "ESTP"],
      "author": "Steven Pressfield",
      "cover": "https://images.example.com/war_of_art.jpg"
    },
   
  
   {
      "title": "Big Magic",
      "type": ["ENFP", "INFP", "ESFP"],
      "author": "Elizabeth Gilbert",
      "cover": "https://images.example.com/big_magic.jpg"
    },
    {
      "title": "Sapiens: A Brief History of Humankind",
      "type": ["INTP", "INTJ", "ENTP"],
      "author": "Yuval Noah Harari",
      "cover": "https://images.example.com/sapiens.jpg"
    },
    {
      "title": "The Lean Startup",
      "type": ["ENTP", "INTJ", "ESTP"],
      "author": "Eric Ries",
      "cover": "https://images.example.com/lean_startup.jpg"
    },
    {
      "title": "The 48 Laws of Power",
      "type": ["ENTP", "INTP", "ESTP"],
      "author": "Robert Greene",
      "cover": "https://images.example.com/48_laws_of_power.jpg"
    },
    {
      "title": "The Subtle Art of Not Giving a F*ck",
      "type": ["ENTP", "INTP", "ESTP"],
      "author": "Mark Manson",
      "cover": "https://images.example.com/subtle_art.jpg"
    }
  ]


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


app.post('/register', async (req, res) => {
    try {
        data.map((data,index)=>{
            let bookRegister = new Books({
                bookID: `B00${index}`,
                bookName: data.title,
                bookDescription: `this is desc ${index}`,
                bookAuthor: data.author,
                bookPublishAt: new Date(),
                bookType: data.type,
                bookImage: data.cover,
            });

            bookRegister.save();
        })

        res.status(201).json({ message: "Book registered successfully" });

    } catch (err) {
        console.error('Failed to register book:', err); // พิมพ์ข้อผิดพลาด
        res.status(500).json({ message: "Failed to register book", error: err });
    }
});



app.listen(port, () => {
    console.log(`Server run on port ${port}`);
})