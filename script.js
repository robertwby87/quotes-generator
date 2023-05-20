const quoteContainer = document.getElementById('quote');
const nextButton = document.getElementById('next-button');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

// Get Quotes from API
const getRandomAPIQuote = async () => {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    const response = await fetch(apiUrl);
    const apiQuotes = await response.json()

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    quoteText.textContent = quote['text'];
    authorText.textContent = quote['author'];
}

// Tweet Quote



nextButton.addEventListener('click', getRandomAPIQuote);


