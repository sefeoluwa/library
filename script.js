// getting values
const addBtn = document.getElementById('add-book');
const form = document.getElementById('book-form');
const bookTitle = document.getElementById('title');
const authorName = document.getElementById('author');
const pageNo = document.getElementById('pages');
const readQ = document.getElementById('read');
const submitBtn = document.getElementsByClassName('submit-btn');
const displayConstainer = document.querySelector('.display-container');

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

//create array to store book objects
let myLibrary = [];

//use form to add a new book

    form.addEventListener("submit", (event) => {
        event.preventDefault();
            title = bookTitle.value;
            author = authorName.value;
            pages = pageNo.value;
            isRead = readQ.value;

        const bookInfo = new Book(title, author, pages, isRead)
        console.log(bookInfo)
    })

