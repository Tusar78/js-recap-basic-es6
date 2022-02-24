const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(quotes => displayQuote(quotes))
}

const displayQuote = data => {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = data.quote;
}

const quoteBtn = document.getElementById('btn-quote');
quoteBtn.addEventListener('click', () => {
    loadQuotes()
})