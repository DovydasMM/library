const container = document.querySelector(".container");
const form = document.getElementById('addBook');
let myLibrary = [];

function Book(title,author, numberOfPages, status) {
this.author = author
this.title = title
this.numberOfPages = numberOfPages
this.status = status
this.info = function(){
    return author, title, numberOfPages, status
}
}

function addBookToLibrary() {
}


//Function for DOM manipulation. It takes info from 
function cardCreation(title, author, numberOfPages){
    let card=document.createElement('div');
    card.classList.add('card')

    //title
    titleOfBook=document.createElement('div');
    titleOfBook.classList.add('title')
    titleOfBook.textContent="The title is: "+ title

    //author
    authorOfBook=document.createElement('div');
    authorOfBook.classList.add('author')
    authorOfBook.textContent="Author: " +author;
    
    //pages
    pageCount=document.createElement('div');
    pageCount.classList.add('pages')
    pageCount.textContent=numberOfPages + " pages";
    
    //appending info to cards
    card.appendChild(titleOfBook)
    card.appendChild(authorOfBook)
    card.appendChild(pageCount)

    //appends the created card to the container
    container.appendChild(card);
}

const book2 = new Book(" Don Quixote","Miguel de Cervantes", 1077, "not read");
const book3 = new Book("1984","George Orwell", 328, "fully read");
const book4 = new Book("The Count of Monte Cristo","Alexandre Dumas", 884, "fully read");


myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)


function fillContainer(){
    for (book in myLibrary){
        cardCreation(myLibrary[book].title, myLibrary[book].author,myLibrary[book].numberOfPages)
    }
}
fillContainer();

const bookTitle = form.elements['bookTitle']
const bookAuthor = form.elements['bookAuthor']
const bookPageCount = form.elements['pageCount']

function addNewBook(){
    let newBookIndex=myLibrary.length-1;
    cardCreation(myLibrary[newBookIndex].title, myLibrary[newBookIndex].author,myLibrary[newBookIndex].numberOfPages)
}



function submitForm(){
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPageCount.value)
    myLibrary.push(newBook);
    addNewBook();
    bookTitle.value ='';
    bookAuthor.value='';
    bookPageCount.value ='';
}

