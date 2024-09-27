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

const data =[
  {
    "title": "Radical Acceptance",
    "type": ["INFJ", "INFP", "ENFJ"],
    "author": "Tara Brach",
    "cover": "../assets/images/book_imgages/radical_acceptance.jpg",
    "synopsis": "This book introduces the practice of deep self-acceptance through mindfulness and meditation, describing how to understand and embrace all aspects of life, both good and bad, to achieve true happiness and inner freedom."
  },
  {
    "title": "Start with Why",
    "type": ["ENTJ", "INTJ", "ENFP"],
    "author": "Simon Sinek",
    "cover": "../assets/images/book_imgages/start_with_why.jpg",
    "synopsis": "Simon Sinek presents the idea that the greatest leaders in the world all start with 'Why'. He explains how the best leaders inspire action by communicating their purpose or belief first, before anything else."
  },
  {
    "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    "type": ["INFJ", "INFP", "ISFP"],
    "author": "Susan Cain",
    "cover": "../assets/images/book_imgages/quiet.jpg",
    "synopsis": "Susan Cain explores the undervalued strength of introverts in a world that tends to favor extroverts. The book highlights the unique contributions that introverts bring to leadership, creativity, and success."
  },
  {
    "title": "The Innovator's Dilemma",
    "type": ["INTJ", "ENTJ", "INFP"],
    "author": "Clayton Christensen",
    "cover": "../assets/images/book_imgages/innovators_dilemma.jpg",
    "synopsis": "Clayton Christensen discusses how successful companies can do everything right and still lose their market leadership, exploring the concept of 'disruptive innovation' and how to avoid the pitfalls that come with it."
  },
  {
    "title": "Drive: The Surprising Truth About What Motivates Us",
    "type": ["ENTP", "INTP", "ENFP"],
    "author": "Daniel H. Pink",
    "cover": "../assets/images/book_imgages/drive.jpg",
    "synopsis": "Daniel H. Pink explores the science behind motivation, arguing that autonomy, mastery, and purpose are the key drivers of motivation, rather than external rewards and punishments."
  },
  {
    "title": "The Untethered Soul",
    "type": ["INFJ", "INFP", "ENFP"],
    "author": "Michael A. Singer",
    "cover": "../assets/images/book_imgages/the_untethered_soul.jpg",
    "synopsis": "Michael A. Singer offers insights on how to achieve inner peace and freedom by letting go of the habitual thoughts and emotions that limit consciousness. The book guides readers toward a deeper connection with their true selves."
  },
  {
    "title": "The Courage to Be Disliked",
    "type": ["INFP", "INFJ", "ENFJ"],
    "author": "Ichiro Kishimi",
    "cover": "../assets/images/book_imgages/the_courage_to_be_disliked.jpg",
    "synopsis": "This book presents the ideas of Alfred Adler in a conversational format, encouraging readers to develop the courage to live according to their own beliefs, without being hindered by the fear of being disliked."
  },
  {
    "title": "How to Win Friends and Influence People",
    "type": ["ESFJ", "ENFJ", "ESTJ"],
    "author": "Dale Carnegie",
    "cover": "../assets/images/book_imgages/win_friends.jpg",
    "synopsis": "Dale Carnegie's timeless advice on how to make friends, influence people, and succeed in life through effective communication, empathy, and strategic interactions."
  },
  {
    "title": "The 5 Levels of Leadership",
    "type": ["ENTJ", "ESTJ", "ISFJ"],
    "author": "John C. Maxwell",
    "cover": "../assets/images/book_imgages/the_5_levels_leadership.jpg",
    "synopsis": "John C. Maxwell outlines a leadership development model consisting of five levels: Position, Permission, Production, People Development, and Pinnacle, helping leaders to enhance their effectiveness and impact."
  },
  {
    "title": "The Book Thief",
    "type": ["ISFP", "INFP", "INFJ"],
    "author": "Markus Zusak",
    "cover": "../assets/images/book_imgages/the_book_thief.jpg",
    "synopsis": "Set in Nazi Germany, this novel follows a young girl named Liesel who steals books and shares them with others. The story is narrated by Death and explores themes of mortality, loss, and the power of words."
  },
  {
    "title": "Born a Crime",
    "type": ["ENTP", "ENFP", "ESFP"],
    "author": "Trevor Noah",
    "cover": "../assets/images/book_imgages/born_a_crime.jpg",
    "synopsis": "Trevor Noah's memoir recounts his experiences growing up in apartheid South Africa as a mixed-race child, offering a compelling look at race, identity, and the power of humor."
  },
  {
    "title": "Outliers: The Story of Success",
    "type": ["INTJ", "ENTP", "ESTJ"],
    "author": "Malcolm Gladwell",
    "cover": "../assets/images/book_imgages/outliers.jpg",
    "synopsis": "Malcolm Gladwell examines the factors that contribute to high levels of success, challenging the notion of the 'self-made' person and emphasizing the importance of community, culture, and timing."
  },
  {
    "title": "The 7 Habits of Highly Effective People",
    "type": ["ESTJ", "ENTJ", "ISFJ"],
    "author": "Stephen R. Covey",
    "cover": "../assets/images/book_imgages/7_habits.jpg",
    "synopsis": "Stephen R. Covey presents a principle-centered approach for solving personal and professional problems, emphasizing the importance of character, integrity, and effective habits."
  },
  {
    "title": "Educated",
    "type": ["INTJ", "INFJ", "INFP"],
    "author": "Tara Westover",
    "cover": "../assets/images/book_imgages/educated.jpg",
    "synopsis": "Tara Westover's memoir tells the story of her journey from a strict and isolated upbringing in rural Idaho to earning a Ph.D. from Cambridge University, exploring themes of family, education, and self-invention."
  },
  {
    "title": "Atomic Habits",
    "type": ["INTJ", "ESTJ", "ENTP"],
    "author": "James Clear",
    "cover": "../assets/images/book_imgages/atomic_habits.jpg",
    "synopsis": "James Clear explains how tiny changes in habits can lead to remarkable results over time. The book provides practical strategies for forming good habits, breaking bad ones, and mastering the behaviors that lead to success."
  },
  {
    "title": "The Subtle Art of Not Giving a F*ck",
    "type": ["ENTP", "INTP", "ESTP"],
    "author": "Mark Manson",
    "cover": "../assets/images/book_imgages/the_subtle_art.jpg",
    "synopsis": "Mark Manson challenges the conventional self-help wisdom, arguing that we should focus on what truly matters and let go of the rest. The book emphasizes the importance of embracing limitations and finding meaning in life's struggles."
  },
  {
    "title": "The Alchemist",
    "type": ["INFP", "INFJ", "ENFP"],
    "author": "Paulo Coelho",
    "cover": "../assets/images/book_imgages/the_alchemist.jpg",
    "synopsis": "Paulo Coelho's classic novel follows the journey of a shepherd boy named Santiago as he pursues his dream of finding treasure in the Egyptian pyramids, exploring themes of destiny, love, and the pursuit of one's personal legend."
  },
  {
    "title": "Grit: The Power of Passion and Perseverance",
    "type": ["ESTP", "ENTJ", "ENFJ"],
    "author": "Angela Duckworth",
    "cover": "../assets/images/book_imgages/grit.jpg",
    "synopsis": "Angela Duckworth argues that grit—a combination of passion and perseverance—is a key factor in success. The book draws on research and real-world examples to show how anyone can cultivate grit to achieve their goals."
  },
  {
    "title": "The 4-Hour Workweek",
    "type": ["ENTP", "INTP", "ESTP"],
    "author": "Tim Ferriss",
    "cover": "../assets/images/book_imgages/the_4_hour_workweek.jpg",
    "synopsis": "Tim Ferriss offers a blueprint for escaping the traditional 9-to-5 work life, focusing on lifestyle design, outsourcing, and time management to create a more fulfilling and flexible work-life balance."
  },
  {
    "title": "The Little Prince",
    "type": ["INFP", "INFJ", "ISFP"],
    "author": "Antoine de Saint-Exupéry",
    "cover": "../assets/images/book_imgages/the_little_prince.jpg",
    "synopsis": "This beloved novella tells the story of a young prince who travels from planet to planet, learning life lessons about love, loss, and human nature. The book is a profound and poetic exploration of childhood and the human experience."
  },
  {
    "title": "The Power of Now",
    "type": ["INFJ", "INFP", "ENFP"],
    "author": "Eckhart Tolle",
    "cover": "../assets/images/book_imgages/the_power_of_now.jpg",
    "synopsis": "Eckhart Tolle's spiritual guide encourages readers to live fully in the present moment, breaking free from the tyranny of the mind and embracing the peace and clarity that comes from being present."
  },
  {
    "title": "The Book of Joy",
    "type": ["ENFJ", "INFJ", "ISFP"],
    "author": "Dalai Lama & Desmond Tutu",
    "cover": "../assets/images/book_imgages/the_book_of_joy.jpg",
    "synopsis": "This book captures a week-long conversation between the Dalai Lama and Desmond Tutu on the subject of joy, exploring how to find happiness even in the face of life's inevitable suffering and challenges."
  },
  {
    "title": "Thinking, Fast and Slow",
    "type": ["INTP", "INTJ", "ENTP"],
    "author": "Daniel Kahneman",
    "cover": "../assets/images/book_imgages/thinking_fast_and_slow.jpg",
    "synopsis": "Nobel laureate Daniel Kahneman explores the two systems that drive the way we think: the fast, intuitive, and emotional system, and the slow, deliberate, and logical system. The book delves into how these systems shape our judgments and decisions."
  },
  {
    "title": "The Art of War",
    "type": ["INTJ", "ENTJ", "ESTJ"],
    "author": "Sun Tzu",
    "cover": "../assets/images/book_imgages/the_art_of_war.jpg",
    "synopsis": "Sun Tzu's ancient military treatise offers timeless strategies for success in warfare and beyond, emphasizing the importance of preparation, strategy, and adaptability in achieving victory."
  },
  {
    "title": "The Art of Happiness",
    "type": ["INFJ", "ENFJ", "INFP"],
    "author": "Dalai Lama",
    "cover": "../assets/images/book_imgages/the_art_of_happiness.jpg",
    "synopsis": "The Dalai Lama, along with psychologist Howard Cutler, explores the concept of happiness from both a spiritual and psychological perspective, offering practical advice for living a happier and more fulfilling life."
  },
  {
    "title": "The Four Agreements",
    "type": ["INFP", "INFJ", "ENFP"],
    "author": "Don Miguel Ruiz",
    "cover": "../assets/images/book_imgages/the_four_agreements.jpg",
    "synopsis": "Don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. The book offers four simple agreements as a code of conduct that can transform our lives to experience freedom, love, and true happiness."
  },
  {
    "title": "The E-Myth Revisited",
    "type": ["ESTJ", "ENTJ", "INTJ"],
    "author": "Michael E. Gerber",
    "cover": "../assets/images/book_imgages/the_e_myth_revisited.jpg",
    "synopsis": "Michael E. Gerber dispels the myths surrounding starting your own business and shows how common assumptions can lead to failure. He presents a practical guide to building a successful business by balancing the roles of entrepreneur, manager, and technician."
  },
  {
    "title": "The Happiness Project",
    "type": ["ESFP", "ENFP", "ENFJ"],
    "author": "Gretchen Rubin",
    "cover": "../assets/images/book_imgages/the_happiness_project.jpg",
    "synopsis": "Gretchen Rubin chronicles her year-long journey to become happier by making small, practical changes in her life. The book provides insights and strategies that readers can apply to their own lives to increase happiness."
  },
  {
    "title": "Dare to Lead",
    "type": ["ENFJ", "INFJ", "ISFJ"],
    "author": "Brené Brown",
    "cover": "../assets/images/book_imgages/dare_to_lead.jpg",
    "synopsis": "Brené Brown explores the importance of courage and vulnerability in leadership, offering tools and practices for leading with empathy, connection, and integrity."
  },
  {
    "title": "The Great Gatsby",
    "type": ["INFP", "INFJ", "ISFP"],
    "author": "F. Scott Fitzgerald",
    "cover": "../assets/images/book_imgages/the_great_gatsby.jpg",
    "synopsis": "F. Scott Fitzgerald's classic novel set in the Jazz Age tells the story of Jay Gatsby's unrequited love for Daisy Buchanan, exploring themes of wealth, class, and the American Dream."
  },
  {
    "title": "Pride and Prejudice",
    "type": ["ISFJ", "INFJ", "INFP"],
    "author": "Jane Austen",
    "cover": "../assets/images/book_imgages/pride_and_prejudice.jpg",
    "synopsis": "Jane Austen's beloved novel follows the romantic tensions between Elizabeth Bennet and Mr. Darcy, highlighting issues of class, marriage, and morality in early 19th-century England."
  },
  {
    "title": "The Catcher in the Rye",
    "type": ["INFP", "INFJ", "ISFP"],
    "author": "J.D. Salinger",
    "cover": "../assets/images/book_imgages/the_catcher_in_the_rye.jpg",
    "synopsis": "J.D. Salinger's novel follows the experiences of Holden Caulfield, a disillusioned teenager who struggles with the phoniness of the adult world and his own identity in post-war America."
  },
  {
    "title": "The Outsiders",
    "type": ["ISFP", "INFP", "ESTP"],
    "author": "S.E. Hinton",
    "cover": "../assets/images/book_imgages/the_outsiders.jpg",
    "synopsis": "S.E. Hinton's coming-of-age novel tells the story of two rival teenage gangs, the Greasers and the Socs, exploring themes of class conflict, brotherhood, and the loss of innocence."
  },
  {
    "title": "The War of Art",
    "type": ["INTJ", "ENTP", "ESTP"],
    "author": "Steven Pressfield",
    "cover": "../assets/images/book_imgages/the_war_of_art.jpg",
    "synopsis": "Steven Pressfield examines the internal resistance that artists and entrepreneurs face, offering strategies for overcoming self-doubt and procrastination to achieve creative success."
  },
  {
    "title": "Big Magic",
    "type": ["ENFP", "INFP", "ESFP"],
    "author": "Elizabeth Gilbert",
    "cover": "../assets/images/book_imgages/big_magic.jpg",
    "synopsis": "Elizabeth Gilbert shares her wisdom and insights on creativity, encouraging readers to embrace curiosity, face fears, and live a creative life without being overwhelmed by the pursuit of perfection."
  },
  {
    "title": "Sapiens: A Brief History of Humankind",
    "type": ["INTP", "INTJ", "ENTP"],
    "author": "Yuval Noah Harari",
    "cover": "../assets/images/book_imgages/sapiens.jpg",
    "synopsis": "Yuval Noah Harari explores the history of humankind from the Stone Age to the present, examining how biology, history, and culture have shaped our species and the world we live in today."
  },
  {
    "title": "The Lean Startup",
    "type": ["ENTP", "INTJ", "ESTP"],
    "author": "Eric Ries",
    "cover": "../assets/images/book_imgages/the_lean_startup.jpg",
    "synopsis": "Eric Ries introduces the lean startup methodology, which emphasizes rapid experimentation, validated learning, and iterative product development to create successful and sustainable businesses."
  },
  {
    "title": "The 48 Laws of Power",
    "type": ["ENTP", "INTP", "ESTP"],
    "author": "Robert Greene",
    "cover": "../assets/images/book_imgages/the_48_laws_of_power.jpg",
    "synopsis": "Robert Greene distills the lessons of history into 48 laws that offer insights on power dynamics, manipulation, and strategy, providing a guide for those who seek to navigate the complex world of influence."
  }
]

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
        score: [null],
      });

      userCreate.save();

    res.status(201).json({ message: "Book registered successfully"});

  } catch (err) {
    console.error('Failed to register book:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.get('/book', async (req, res) => {
  try {

    const title = req.params.id;
    const bookData = await Books.find();
    res.status(201).json(bookData);

  } catch (err) {
    console.error('Failed to get all book:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.get('/book/:id', async (req, res) => {
  try {

    const title = req.params.id;
    const bookData = await Books.findOne({title:title});
    res.status(201).json(bookData);

  } catch (err) {
    console.error('Failed to get book by name:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.get('/mbti/:id', async (req, res) => {
  try {
    const title = req.params.id;
    const mbtiData = await Mbti_types.findOne({name:'INFJ'});
    res.status(201).json(mbtiData);

  } catch (err) {
    console.error('Failed to get book by name:', err); // พิมพ์ข้อผิดพลาด
    res.status(500).json({ message: "Failed to register book", error: err });
  }
});


app.post('/update', async (req, res) => {
  try {
      const {user_id,score,type} = req.body

      let updateScore = await Users.findOneAndUpdate({user_id: user_id},{mbti_type:type,score:score});
      
      if (!updateScore) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User data is updated!!" });

  } catch (err) {
    console.error('Failed to update score:', err); // แสดงข้อผิดพลาด
    res.status(500).json({ message: "Failed to update score", error: err });
  }
});


app.listen(port, () => {
  console.log(`Server run on port ${port}`);
})