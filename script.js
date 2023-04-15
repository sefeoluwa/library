// getting values
const addBtn = document.getElementById('add-book');
const form = document.getElementById('book-form');
const bookTitle = document.getElementById('title');
const authorName = document.getElementById('author');
const pageNo = document.getElementById('pages');
const readQ = document.getElementById('read');
const submitBtn = document.getElementsByClassName('submit-btn');
const displayContainer = document.getElementById('display');

//declare book object
class Book{
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

//create array to store book objects in global scope
let myLibrary = [];

//use form to add a new book with a function in global scope


function logBook() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        title = bookTitle.value;
        author = authorName.value;
        pages = pageNo.value;
        isRead = readQ.checked ? "Read" : "Unread";
        const bookInfo = new Book(title, author, pages, isRead);
        myLibrary.push(bookInfo);
        form.reset();
        const library = document.createElement('div');
        
    const titleElement = document.createElement("h2");
    titleElement.textContent = `${bookInfo.title}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${bookInfo.author}`;

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${bookInfo.pages}`;

    const readElement = document.createElement("p");
    readElement.textContent = `Status: ${bookInfo.isRead}`;    
    
    library.appendChild(titleElement);
    library.appendChild(authorElement);
    library.appendChild(pagesElement);
    library.appendChild(readElement);

    displayContainer.appendChild(library);

    });
   
}

logBook();





    