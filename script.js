const baseURL = "http://openlibrary.org/search.json?q=";

let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');                  
const submitBtn = document.querySelector('.submit');

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

const section = document.querySelector('section');


nav.style.display = 'none';


let pageNumber = 0;
let displayNav = false; 


searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);            // (3)
previousBtn.addEventListener('click', previousPage);