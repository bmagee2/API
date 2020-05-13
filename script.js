const baseURL = " https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal";
// const baseURL = "http://openlibrary.org/search.json?q=";
let url;


const searchTerm = document.querySelector('.search'); 
const searchForm = document.querySelector('form');                  
const submitBtn = document.querySelector('.submit');

const section = document.querySelector('ul');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    
    url = `${baseURL}?&q=${searchTerm.value}`;
    console.log('URL:', url);
  
}