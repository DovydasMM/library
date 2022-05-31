const container = document.querySelector(".container");
const form = document.getElementById('addBook');
let bookIndex;
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
    let newBookIndex=myLibrary.length-1;
    cardCreation(myLibrary[newBookIndex].title, myLibrary[newBookIndex].author,myLibrary[newBookIndex].numberOfPages)
}


//Function for DOM manipulation. It takes info from 

function cardCreation(title, author, numberOfPages, bookIndex){
    
    let card=document.createElement('div');
    card.classList.add('card')
    
    card.dataset.set=bookIndex;

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

    //remove button
    removeButton=document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent='Delete';
    deleteCard()
    
    
    

    
    
    //appending info to cards
    card.appendChild(titleOfBook)
    card.appendChild(authorOfBook)
    card.appendChild(pageCount)
    card.appendChild(removeButton)

    //appends the created card to the container
    container.appendChild(card);


}

const book2 = new Book("Don Quixote","Miguel de Cervantes", 1077, "not read");
const book3 = new Book("1984","George Orwell", 328, "fully read");
const book4 = new Book("The Count of Monte Cristo","Alexandre Dumas", 884, "fully read");


myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)


function fillContainer(){
    for (book in myLibrary){
        bookIndex = book;
        cardCreation(myLibrary[book].title, myLibrary[book].author,myLibrary[book].numberOfPages, bookIndex)
    }
}
fillContainer();

const bookTitle = form.elements['bookTitle']
const bookAuthor = form.elements['bookAuthor']
const bookPageCount = form.elements['pageCount']

function addNewBook(){

}

function submitForm(){
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPageCount.value)
    myLibrary.push(newBook);
    addBookToLibrary();
    bookTitle.value ='';
    bookAuthor.value='';
    bookPageCount.value ='';
}

function deleteCard(){
    removeButton.addEventListener('click', function (e) {
        console.log(card.dataset);
        

      });
}
