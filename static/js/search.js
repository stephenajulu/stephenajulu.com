const index = lunr(function () {
    this.field('title')
    this.field('content')
    this.ref('url')
});

fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(function (doc) {
            index.add(doc)
        });
    });

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('keyup', function (event) {
    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }
    const query = event.target.value;
    const results = index.search(query);
    results.forEach(function (result) {
        const url = result.ref;
        const title = result.title;
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = url;
        link.innerText = title;
        item.appendChild(link);
        searchResults.appendChild(item);
    });
});
