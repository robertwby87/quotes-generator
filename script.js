const quoteContainer = document.getElementById('quote');
const nextButton = document.getElementById('next-button');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

// Get Quotes from API
const getRandomAPIQuote = async () => {
    const apiUrl = "https://zenquotes.io/api/random";
    const response = await fetch(apiUrl);
    const apiQuotes = await response.json()

    quoteText.textContent = apiQuotes[0]['q'];
    authorText.textContent = apiQuotes[0]['a'];
}

// Tweet Quote

nextButton.addEventListener('click', getRandomAPIQuote);


