function parseContents() {
    /*
    parse.js

    MediaWiki API Demos
    Demo of `Parse` module: Parse content of a page

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: "parse",
    page: pageTitleU,
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
// console.log(url);
fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        // console.log("Page title before parse: " + pageTitle);
        console.log("URL before parsing: " + url);
        var parsedText = response.parse.text["*"];
        console.log("Type of parsedText: " + typeof(parsedText));

        // Convert text to temp HTML for ease of parsing
        var tempEl = document.createElement("tempel");
        tempEl.innerHTML = parsedText;
        console.log("Type of tempEl: " + typeof(tempEl));
        console.log(tempEl);

        // Insert contents of tempEl to DOM
        document.getElementById("hidden-content").appendChild(tempEl);
        var historyHeading = document.getElementById("History");
        console.log("Contents of #History: " + historyHeading.innerHTML);
        var firstHPar = $("#History").parent().siblings().next("p");
        console.log("Contents of first History paragraph: " + firstHPar.html());
        // console.log(parsedText);
        // var firstPar = parsedJSON.getElementByTagName('p')[0].innerHTML;
        // console.log(firstPar);
    })
    .catch(function(error){console.log(error);});
}