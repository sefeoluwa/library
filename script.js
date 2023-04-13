const addBtn = document.getElementById('add-book');
const form = document.getElementById('book-form');
const bookDisplay = document.querySelector('.book-display');
// const bookDisplayContainer = document.querySelector('.display-container')

const myLibrary = [];
// constructor function to get book info
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;        
    }
};

Book.prototype.info = function() {
    const readStatus = this.read ? "read" : "Not read yet";
    return `<p class="result-title">Title: "${this.title}"</p><p class="result-author">Author: ${this.author}</p><p class="result-pages">Pages: ${this.pages}</p><p class="result-read-status"> ${readStatus}</p>`;
  };

/*function updateLibrary(){
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

      myLibrary.push(book);
      
      //append the form results to the display area
      bookDisplay.innerHTML = book.info();
      
      // reset the form
    form.reset();

      //remove display of the form and display the book log
      form.style.display = 'none';
      bookDisplayContainer.style.display = 'block';
        bookDisplay.style.display = 'flex';
        
    })
    
      
      //show form element on click of the add book button
    
} */

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
  
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }
  


function updateLibrary() {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get the values of the input fields
      const title = document.querySelector("#title").value;
      const author = document.querySelector("#author").value;
      const pages = document.querySelector("#pages").value;
      const read = document.querySelector("#read").checked;
  
      // Create a new Book object with the input values
      const book = new Book(title, author, pages, read);
  
      // Add the new book object to the myLibrary array
      myLibrary.push(book);
  
    
//get display container
    const displayContainer = document.querySelector('.display-container')
  
      // Create a new div element for each book in the myLibrary array
      displayContainer.innerHTML = "";
      for (let i = 0; i < myLibrary.length; i++) {
        const bookInfo = myLibrary[i].info();
        const bookElement = document.createElement("div");
        
        bookElement.innerHTML = bookInfo;
        displayContainer.appendChild(bookElement);
      }  
      // Clear the form input fields
      form.reset();
      form.style.display = 'none';
    });
  }
  


//adding a function to load the operational function for the library function when the add button is clicked
addBtn.addEventListener('click', () => {    
    form.style.display = 'block';
   updateLibrary();
  });

  //log the update library function so the user can add other books
  