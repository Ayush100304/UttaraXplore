document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = '10e63555f9d7448b92cbcd5da1ae06f1'; // Replace with your NewsAPI key
    const NEWS_URL = `https://newsapi.org/v2/everything?q=Uttarakhand&apiKey=${API_KEY}`;

    const newsList = document.getElementById('news-list');

    // Fetch news articles
    fetch(NEWS_URL)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(article => {
                    const newsItem = document.createElement('li');
                    newsItem.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>${article.description || 'Description not available.'}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    `;
                    newsList.appendChild(newsItem);
                });
            } else {
                newsList.innerHTML = '<li>No news available at the moment.</li>';
            }
        })
        .catch(err => {
            console.error('Error fetching news:', err);
            newsList.innerHTML = '<li>Error fetching news. Please try again later.</li>';
        });
});
