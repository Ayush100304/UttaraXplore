const apiKey = '1e29c6e207eb4e1ab1761c4cce9aefd1';  // Your actual API key

// API URLs for news specific to Uttarakhand in English and Hindi
const apiUrlEnglish = `https://newsapi.org/v2/everything?q=Uttarakhand&language=en&apiKey=${apiKey}`;
const apiUrlHindi = `https://newsapi.org/v2/everything?q=Uttarakhand&language=hi&apiKey=${apiKey}`;

// Function to fetch and display news
function fetchNews() {
    // Fetch English news
    fetch(apiUrlEnglish)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                displayArticles(data.articles, 'English News');
            } else {
                console.error('Failed to fetch English news:', data.message);
            }
        })
        .catch(error => console.error('Error:', error));

    // Fetch Hindi news
    fetch(apiUrlHindi)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                displayArticles(data.articles, 'Hindi News');
            } else {
                console.error('Failed to fetch Hindi news:', data.message);
            }
        })
        .catch(error => console.error('Error:', error));
}

// Function to display the news articles on the webpage
function displayArticles(articles, language) {
    const newsList = document.getElementById('news-list');
    
    // Section Title for Hindi or English
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = language;
    newsList.appendChild(sectionTitle);

    // Clear previous results
    const articlesContainer = document.createElement('ul');
    
    // Sort articles by published date in descending order (latest on top)
    articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Loop through the articles and display them
    articles.forEach(article => {
        const listItem = document.createElement('li');
        const articleLink = document.createElement('a');
        articleLink.href = article.url;
        articleLink.target = '_blank';
        articleLink.textContent = article.title;  // Display the article title
        listItem.appendChild(articleLink);
        articlesContainer.appendChild(listItem);
    });

    // Append the articles list to the main news list
    newsList.appendChild(articlesContainer);
}

// Fetch and display both English and Hindi news related to Uttarakhand
fetchNews();
