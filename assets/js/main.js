// ================= Quotes Object ================================ //
var quotes = [
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
        source: "Dr. Seuss",
        number: "1"
    },
    {
        quote: "This too, shall pass.",
        source: "Anonymous",
        number: "2"
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        source: "Theodore Roosevelt",
        number: "3"
    },
    {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        source: "Anonymous",
        number: "4"
    },
    {
        quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
        source: "Harvey Fierstein",
        number: "5"
    },
    {
        quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
        source: "C.S. Lewis",
        number: "6"
    },
    {
        quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
        source: "Sador",
        number: "7"
    },
    {
        quote: "Life's too mysterious to take too serious.",
        source: "Mary Engelbreit",
        number: "8"
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        source: "Eleanor Roosevelt",
        number: "9"
    },
    {
        quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
        source: "Albert Einstein",
        number: "10"
    },
    {
        quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
        source: "Terry Pratchett",
        number: "11"
    },
    {
        quote: "There isn't a way things should be. There's just what happens, and what we do.",
        source: "Terry Pratchett",
        number: "12"
    },
    {
        quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
        source: "Rocky Balboa",
        number: "13"
    },
    {
        quote: "More fuck yeah, less fuck that.",
        source: "Anonymous",
        number: "14"
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        source: "African proverb",
        number: "15"
    },
    {
        quote: "It's OK to not be OK, as long as you don't stay that way.",
        source: "Anonymous",
        number: "16"
    },
    {
        quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
        source: "Maya Angelou",
        number: "17"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "T. Roosevelt",
        number: "18"
    },
    {
        quote: "May I never be complete. May I never be content. May I never be perfect.",
        source: "Chuck Palahniuk",
        number: "19"
    },
    {
        quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
        source: "Marie Curie",
        number: "20"
    },
    {

        quote: "Those who don't believe in magic will never find it.",
        source: "Roald Dahl",
        number: "21"
    },
    {
        quote: "There is no elevator to success  you have to take the stairs.",
        source: "Anonymous",
        number: "22"
    },
    {
        quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
        source: "Jose Luis Borges",
        number: "23"
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        source: "Albus Dumbledore",
        number: "24"
    },
    {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        source: "George Carlin",
        number: "25"
    },
    {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        source: "Eleanor Roosevelt",
        number: "26"
    },
    {
        quote: "Do not set yourself on fire in order to keep others warm.",
        source: "Anonymous",
        number: "27"
    },
    {
        quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
        source: "Doctor Who",
        number: "28"
    },
    {
        quote: "It's supposed to be hard. If it were easy, everyone would do it.",
        source: "Jimmy Dugan",
        number: "29"
    },
    {
        quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
        source: "Anonymous",
        number: "30"
    },
    {
        quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
        source: "Anonymous",
        number: "31"
    },
    {
        quote: "Never cowardly or cruel. Never give up, never give in.",
        source: "Doctor Who",
        number: "32"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        source: "Ralph Waldo Emerson",
        number: "33"
    },
    {
        quote: "In 20 years, you probably won't even remember this.",
        source: "Anonymous",
        number: "34"
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        source: "William Shakespeare",
        number: "35"
    },
    {
        quote: "Clear eyes, full hearts, can't lose.",
        source: "Dillon Panthers",
        number: "36"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Aristotle",
        number: "37"
    }
];

// ================= Function to randomly ========================== //
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes[randomNumber];
    return randomQuote;
}

// Function to call the getRandomQuote function and stores the returned quote object in a variable
function printQuote() {
    var quotes = getRandomQuote();
    var quoteContainer = document.getElementById("quote-box");

    var quoteString = `
    <p class="number">ADVICE #${quotes.number}</p>
    <p class="quote">“${quotes.quote}” — <span>${quotes.source}</span></p>
    `;

    quoteContainer.innerHTML = quoteString;
}

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote);