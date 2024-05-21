const myQuote = document.getElementById('my-quote')
const myAuthor = document.getElementById('my-author')
const nextButton = document.getElementById('my-btn')

nextButton.addEventListener('click', morningQuote)

const morningQuotes = [
    {
        quote: "\" The morning was full of sunlight and hope.\" ",
        author:"- Kate Chopin"
    },

    {
        quote: "\" Each morning we are born again. What we do today is what matters most.\"",
        author:"- Buddha"
    },

    {
        quote: "\"With the new day comes new strength and new thoughts.\"",
        author:"- Eleanor Roosevelt"
    },

    {
        quote: "\"Opportunities are like sunrises. If you wait too long, you miss them.\"",
        author:"- William Arthur Ward"
    },

    {
        quote: "\"When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.\"",
        author:"-Marcus Aurelius"
    }
]

let currentIndex = 1 //my current index is 1 bcs i alreday gave the index0 quote in my html. if i gave 0 that quote will be displayed two times.

function morningQuote(){
    const clickedQuote = morningQuotes[currentIndex++]
    console.log(clickedQuote.quote)
    console.log(clickedQuote.author)
    myQuote.innerHTML = clickedQuote.quote
    myAuthor.innerHTML=clickedQuote.author

    if (currentIndex >= morningQuotes.length) {
        currentIndex = 0;
    } //resest the current index to 0 when exceeds the length of array.looping.
    
}


