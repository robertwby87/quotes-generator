const quoteContainer = document.getElementById('quote');
const nextButton = document.getElementById('next-button');
const twitterButton = document.getElementById('tweet-button');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const loader = document.getElementById('loader');


let apiQuotes = [];

// show Loader
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//  Hide Loader
function removeLoadingSpinner() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Get Quotes from API
const getRandomAPIQuote = async () => {
    showLoadingSpinner();
    try {
        const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    } catch (error) {
        alert(error);
    }
    removeLoadingSpinner();
}

// Show Quote onto the card
const showQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote['text'];
    authorText.textContent = quote['author'];
}

//  Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


nextButton.addEventListener('click', showQuote);
twitterButton.addEventListener('click',tweetQuote);

removeLoadingSpinner();
getRandomAPIQuote();

