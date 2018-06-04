"use strict";

const quotes = [
    "To travel is to live",
    "You only live once, but if you do it right, once is enough.",
    "Never regret - because at one point, it was what you wanted.",
    "We don't grow when things are easy - we grow when we face challenges.",
    "Yeah, I can get down with the cheesy quotes."
]

const getRandomQuote = () => {
    return quotes[Math.floor(Math.random()*quotes.length)];
}; 

module.exports = getRandomQuote; 