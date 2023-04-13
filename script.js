const addBtn = document.getElementById('add-book');
const form = document.getElementById('book-form');
const bookDisplay = document.querySelector('.book-display');
const bookDisplayContainer = document.querySelector('.display-container')

//array to store all book elements
let myLibrary = [];

// constructor function to get book info
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;        
    }
};

function updateLibrary(){
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
    
      
        //select the values returned from the input elements
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;
      const pages = document.querySelector('#pages').value;
      const read = document.querySelector('#read').checked;
    
    
      // create a new Book object with the input values
      const book = new Book(title, author, pages, read);
      Book.prototype.info = function() {
        const readStatus = this.read ? "read" : "Not read yet";
        return `<p class="result-title">Title: "${this.title}"</p><p class="result-author">Author: ${this.author}</p class="result-pages"><p>Pages: ${this.pages}</p><p class="result-read-status"> ${readStatus}</p>`;
      };
      
      //append the form results to the display area
      bookDisplay.innerHTML = book.info();
      
      //remove display of the form and display the book log
      form.style.display = 'none';
      bookDisplayContainer.style.display = 'block';
        bookDisplay.style.display = 'flex';
     
    })
    
      
      //show form element on click of the add book button
    
}

addBtn.addEventListener('click', () => {    
    form.style.display = 'block';
   updateLibrary();
  });