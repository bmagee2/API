// URL
const baseURL = "http://openlibrary.org/search.json?q=books";
let url;
// SEARCH FORM
const searchTerm = document.querySelector('.search'); 
const searchForm = document.querySelector('form');                  
const submitButton = document.querySelector('.submit');
let section = document.querySelector("section");
// RESULTS SECTION
const results = document.querySelector('section');
//LISTEN FOR SEARCH SUBMIT
searchForm.addEventListener('submit', fetchResults);
// TARGET REQUEST TO URL
function fetchResults(object) {
    console.log(object);  
    object.preventDefault();
    url = `${baseURL}?t=${searchTerm.value}`;
    console.log(url);
    // FETCH REQUEST
    fetch(url)   // RUN URL
        .then(function(result) {  // CREATE PROMISE (.THEN), RETURNS RESPONSE OBJECT (RESULT) 
            //console.log(result)
            return result.json();   // PROMISE RETURNS FUNCTION THAT CONVERTS RESULT INTO JSON
        }).then(function (json) {   // PROMISE #2 WITH FUNCTION THAT TAKES JSON OBJECT
            //console.log(json.docs);
            displayResults(json);
        });
}
// // // FUNCTION TO DISPLAY DATA
function displayResults(json) {         //START TO PREPARE JSON DATA TO DISPLAY IT
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
      //console.log("DisplayResults", json);
      let books = json;
      console.log(books.docs)
    if(books.docs.length === 0) {
        console.log("checked out");
    } else {
        for(let i = 0; i < books.docs.length; i++) {
            let book = document.createElement("article");      // HTML CONTAINERS FOR DATA
            let title = document.createElement("h3");
            let current = books.docs[i];
            title.textContent = "Book: " + current.title_suggest;
            book.appendChild(title);
            section.appendChild(book);
        }
    }  
};