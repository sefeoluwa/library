// getting values
const addBtn = document.getElementById('add-book');
const form = document.getElementById('book-form');
const formContainer = document.getElementsByClassName('form-container')
const bookTitle = document.getElementById('title');
const authorName = document.getElementById('author');
const pageNo = document.getElementById('pages');
const readQ = document.getElementById('read');
const submitBtn = document.getElementsByClassName('submit-btn');
const displayContainer = document.getElementById('display');
//declare book object
class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false,
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}
//set initial display of the form to none

form.style.display = 'none';

//function to show form and log library with the add book button
function addBook() {
  addBtn.addEventListener('click', () => {
    form.style.display = 'flex';
  
  });
    
}
addBook();
//create array to store book objects in global scope
let myLibrary = [];
//use form to add a new book with a function in global scope
function logBook() {
  event.preventDefault();
  const title = bookTitle.value;
  const author = authorName.value;
  const pages = pageNo.value;
  const isRead = readQ.checked ? 'Read' : 'Unread';
  const bookInfo = new Book(title, author, pages, isRead);
  myLibrary.push(bookInfo);
  form.reset();
  displayLibrary();
  form.style.display = 'none';
}
// function to display the library
function displayLibrary() {
  displayContainer.innerHTML = '';
  //loop over the elements in the array
  myLibrary.forEach((book) => {
    //create new elements and settheir inner html to book object values
    const library = document.createElement('div');
    library.classList.add('library');
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    titleElement.classList.add('title-element');
    
    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    authorElement.classList.add('author-element');
    
    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${book.pages}`;
    pagesElement.classList.add('pages-element');
    
    const readElement = document.createElement('button');
    readElement.textContent = `Status: ${book.isRead}`;
    if (readElement.textContent === 'Status: Read'){
        readElement.classList.add('read-element');
    } else {
        readElement.classList.add('unread-element');
    }

    readElement.addEventListener('click', function(event) {
        const element = event.target;
        element.classList.toggle('read-element');
        element.classList.toggle('unread-element');
        if (event.target.textContent === 'Status: Read') {
          event.target.textContent = 'Status: Unread';
        } else {
          event.target.textContent = 'Status: Read';
        }
      });

     

    //remove a book from the library
    const removeBook = document.createElement('button')
    removeBook.classList.add('remove-book');
    removeBook.textContent = "Remove";
    removeBook.addEventListener('click', () => {
        const bookElement = event.target.parentNode; // get the parent element of the clicked 'remove' button
        const bookIndex = Array.from(bookElement.parentNode.children).indexOf(bookElement); // get the index of the book element within its parent
        myLibrary.splice(bookIndex, 1); // remove the book object from the array
        bookElement.remove(); // remove the book element from the DOM
    } )
    removeBook.addEventListener('click', remove)
    removeBook.addEventListener('touchstart', remove);



    //append the new elements to the library
    library.appendChild(titleElement);
    library.appendChild(authorElement);
    library.appendChild(pagesElement);
    library.appendChild(readElement);
    library.appendChild(removeBook)
    displayContainer.appendChild(library);
  });
}
form.addEventListener('submit', logBook);

function toggleClass(event) {
    const element = event.currentTarget;
    if (element.textContent === 'Status: Read') {
      element.classList.remove('unread-element');
      element.classList.add('read-element');
      element.textContent = 'Status: Unread';
    } else {
      element.classList.remove('read-element');
      element.classList.add('unread-element');
      element.textContent = 'Status: Read';
    }
  }
  


  //fucntion to remove a book
function remove() {
    if (displayContainer && displayContainer.children.length > 0){
    const bookElement = event.target.parentNode; // get the parent element of the clicked 'remove' button
        const bookIndex = Array.from(bookElement.parentNode.children).indexOf(bookElement); // get the index of the book element within its parent
        myLibrary.splice(bookIndex, 1); // remove the book object from the array
        bookElement.remove(); // remove the book element from the DOM
    }
}