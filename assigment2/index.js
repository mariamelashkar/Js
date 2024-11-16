quotes = [
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "--Narcotics Anonymous",
  },

  {
    quote: "You miss 100% of the shots you don't take.",

    author: "--Wayne Gretzy",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",

    author: "--Albert Einstein",
  },
  {
    quote: "The best revenge is massive success.",

    author: "--Frank Sinatra",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",

    author: "--Elbert Hubbard",
  },
];
function generateQuote() {
    const quoteNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteOutput').innerHTML=quotes[quoteNum].quote
    document.getElementById('authorOutput').innerHTML = quotes[quoteNum].author;



}
