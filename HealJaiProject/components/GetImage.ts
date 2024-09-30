

const GetImage = (bookName: string) => {
    const books: Record<string, any> = {
        "The Courage to Be Disliked": require('../assets/images/book_images/the_courage_to_be_disliked.jpg'),
        "The Happiness Project": require('../assets/images/book_images/the_happiness_project.jpg'),
        "How to Win Friends and Influence People": require('../assets/images/book_images/win_friends.jpg'),
        "Quiet: The Power of Introverts in a World That Can't Stop Talking": require('../assets/images/book_images/quiet.jpg'),
        "Big Magic": require('../assets/images/book_images/big_magic.jpg'),
        "Start with Why": require('../assets/images/book_images/start_with_why.jpg'),
        "The E-Myth Revisited": require('../assets/images/book_images/the_e_myth_revisited.jpg'),
        "Drive: The Surprising Truth About What Motivates Us": require('../assets/images/book_images/drive.jpg'),
        "Atomic Habits": require('../assets/images/book_images/atomic_habits.jpg'),
        "The Untethered Soul": require('../assets/images/book_images/the_untethered_soul.jpg'),
        "The Art of War": require('../assets/images/book_images/the_art_of_war.jpg'),
        "Born a Crime": require('../assets/images/book_images/born_a_crime.jpg'),
        "The Four Agreements": require('../assets/images/book_images/the_four_agreements.jpg'),
        "Pride and Prejudice": require('../assets/images/book_images/pride_and_prejudice.jpg'),
        "The Catcher in the Rye": require('../assets/images/book_images/the_catcher_in_the_rye.jpg'),
        "Sapiens: A Brief History of Humankind": require('../assets/images/book_images/sapiens.jpg'),
        "The Book of Joy": require('../assets/images/book_images/the_book_of_joy.jpg'),
        "Grit: The Power of Passion and Perseverance": require('../assets/images/book_images/grit.jpg'),
        "The Lean Startup": require('../assets/images/book_images/the_lean_startup.jpg'),
        "The Book Thief": require('../assets/images/book_images/the_book_thief.jpg'),
        "The 7 Habits of Highly Effective People": require('../assets/images/book_images/7_habits.jpg'),
        "The 48 Laws of Power": require('../assets/images/book_images/the_48_laws_of_power.jpg'),
        "Outliers: The Story of Success": require('../assets/images/book_images/outliers.jpg'),
        "The 4-Hour Workweek": require('../assets/images/book_images/the_4_hour_workweek.jpg'),
        "The Alchemist": require('../assets/images/book_images/the_alchemist.jpg'),
        "The Innovator's Dilemma": require('../assets/images/book_images/innovators_dilemma.jpg'),
        "The Great Gatsby": require('../assets/images/book_images/the_great_gatsby.jpg'),
        "The Art of Happiness": require('../assets/images/book_images/the_art_of_happiness.jpg'),
        "The War of Art": require('../assets/images/book_images/the_war_of_art.jpg'),
        "The Outsiders": require('../assets/images/book_images/the_outsiders.jpg'),
        "Educated": require('../assets/images/book_images/educated.jpg'),
        "Radical Acceptance": require('../assets/images/book_images/radical_acceptance.jpg'),
        "The Subtle Art of Not Giving a F*ck": require('../assets/images/book_images/the_subtle_art.jpg'),
        "The Little Prince": require('../assets/images/book_images/the_little_prince.jpg'),
        "The 5 Levels of Leadership": require('../assets/images/book_images/the_5_levels_leadership.jpg'),
        "Dare to Lead": require('../assets/images/book_images/dare_to_lead.jpg'),
        "Thinking, Fast and Slow": require('../assets/images/book_images/thinking_fast_and_slow.jpg'),
        "The Power of Now": require('../assets/images/book_images/the_power_of_now.jpg'),
    };

    return books[bookName] || null;
};

const GetMbtiImage = (mbtiName:string) => {
    const mbtis: Record<string, any> = {
        'intj': require('../assets/images/char_images/intj.png'),
        'entj': require('../assets/images/char_images/entj.png'),
        'infj': require('../assets/images/char_images/infj.png'),
        'enfj': require('../assets/images/char_images/enfj.png'),
        'esfj': require('../assets/images/char_images/esfj.png'),
        'esfp': require('../assets/images/char_images/esfp.png'),
        'estj': require('../assets/images/char_images/estj.png'),
        'estp': require('../assets/images/char_images/estp.png'),
        'enfp': require('../assets/images/char_images/enfp.png'),
        'entp': require('../assets/images/char_images/entp.png'),
        'isfj': require('../assets/images/char_images/isfj.png'),
        'istj': require('../assets/images/char_images/istj.png'),
        'isfp': require('../assets/images/char_images/isfp.png'),
        'istp': require('../assets/images/char_images/istp.png'),
        'infp': require('../assets/images/char_images/infp.png'),
        'intp': require('../assets/images/char_images/intp.png'),
    };

    return mbtis[mbtiName] || null;
}

export {GetImage,GetMbtiImage};
