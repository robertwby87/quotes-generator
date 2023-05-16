const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain"
    }
    // Add more quotes in a similar format
  ];
  
  
  const quoteContainer = document.getElementById('quote');
  const nextButton = document.getElementById('next-button');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayRandomQuote() {
    const { quote, author } = getRandomQuote();
    quoteContainer.innerHTML = ` <p id="quote">${quote}</p><p id="author">${author}</p>`;
  }
  
  nextButton.addEventListener('click', displayRandomQuote);
