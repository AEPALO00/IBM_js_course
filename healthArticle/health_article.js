// var xhr = new XMLHttpRequest();

// var url = './health.json';

// xhr.open('GET', url, true);
// xhr.responseType = 'json';

// xhr.onload = function() {
//     var articles = xhr.response.articles;
//     var articlesDiv = document.getElementById('health_articles');
    
//     articles.forEach(article => {
//         var articleDiv = document.createElement('div');
//         articleDiv.classList.add('article');
//         var title = document.createElement('h2');
//         title.textContent = article.title;
//         var description = document.createElement('p');
//         description.textContent = article.description;
//         var waysHeader = document.createElement('h3');
//         waysHeader.textContent = 'Ways to Achieve:';
//         var waysList = document.createElement('ul');
//         article.ways_to_achieve.forEach(function(way) {
//             var listItem = document.createElement('li');
//             listItem.textContent = way;
//             waysList.appendChild(listItem);
//         });
    
//         var benefitsHeader = document.createElement('h3');
//         benefitsHeader.textContent = 'Benefits:';
//         var benefitsList = document.createElement('ul');
//         article.benefits.forEach(function(benefit) {
//             var listItem = document.createElement('li');
//             listItem.textContent = benefit;
//             benefitsList.appendChild(listItem);
//         });
//         articleDiv.appendChild(title);
//         articleDiv.appendChild(description);
//         articleDiv.appendChild(waysHeader);
//         articleDiv.appendChild(waysList);
//         articleDiv.appendChild(benefitsHeader);
//         articleDiv.appendChild(benefitsList);
//         articlesDiv.appendChild(articleDiv);
//     });

// }    

// xhr.send();

// ------------------------------------------------------------
// NEWS ARTICLE
var xhr = new XMLHttpRequest();

var url = './news.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('news_articles');
    
    articles.forEach(article => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        var title = document.createElement('h2');
        title.textContent = article.title;
        var description = document.createElement('p');
        description.textContent = article.description;
        var keyConceptsHeader = document.createElement('h3');
        keyConceptsHeader.textContent = 'Key Concepts:';
        var conceptsList = document.createElement('ul');
        article.key_concepts.forEach(function(concept) {
            var listItem = document.createElement('li');
            listItem.textContent = concept;
            conceptsList.appendChild(listItem);
        });
    
        var linkHeader = document.createElement('h3');
        linkHeader.textContent = 'Link:';
        var link = document.createElement('a');
        link.href = "#"
        link.textContent = article.link;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(keyConceptsHeader);
        articleDiv.appendChild(conceptsList);
        articleDiv.appendChild(linkHeader);
        articleDiv.appendChild(link);
        articlesDiv.appendChild(articleDiv);
    });

}    

xhr.send();