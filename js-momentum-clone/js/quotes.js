const quotes = [
    {
        quote: "Girls, Be Ambitious.",
        author: "Women",
    },
    {
        quote: "We could never learn to be brave and patient, if there were only joy in the world.",
        author: "Helen Adams Keller",
    },
    {
        quote: "What makes the desert beautiful is that somewhere it hides a well.",
        author: "Antoine Marie Jean-Baptiste Roger de Saint-Exupéry",
    },
    {
        quote: "I don't look to jump over 7-foot bars. I look around for 1-foot bars that I can step over.",
        author: "Warren Edward Buffett",
    },
    {
        quote: "There's no such thing as failure. Mistakes happen in your life to bring into focus more clearly who you really are.",
        author: "Oprah Gail Winfrey",
    }, 
    {
        quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
        author: "Dale Carnegie",
    },
    {
        quote: "There are no great people in this world, only great challenges which ordinary people rise to meet.",
        author: "William Frederick Halsey, Jr.",
    },
    {
        quote: "Blaze with the fire that is never extinguished.",
        author: "Luisa Sigea",
    },
    {
        quote: "Pride sullies the noblest character.",
        author: "Claudianus",
    },
];
const arrayLen = quotes.length;
const quote = document.querySelector(".quote-section .quote");
const author = document.querySelector(".quote-section .author");

function drawQuote() {
    const randomNum = parseInt(Math.random() * arrayLen);
    quote.innerText = `${quotes[randomNum].quote}`
    author.innerText = `- ${quotes[randomNum].author}`
}
drawQuote();