var xhr = new XMLHttpRequest();

var url = './health.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

}

articles.array.forEach(article => {
    
});