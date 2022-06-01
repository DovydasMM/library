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

Book.prototype.sayStatus = function(){
    console.log(this.status)
}

Book.prototype.changeStatus = function(){
    console.log(this.name)
    if (this.status == "Unfinished"){
        console.log('Bra')
        this.status = "Finished"
        bookStatus.textContent="Book status: " +this.status
    }
    else {
            this.status = "Unfinished"
            bookStatus.textContent="Book status: " +this.status
        }
    }




function addBookToLibrary() {
    let newBookIndex=myLibrary.length-1;
    cardCreation(myLibrary[newBookIndex].title, myLibrary[newBookIndex].author,myLibrary[newBookIndex].numberOfPages, myLibrary[newBookIndex].status)
}


//Function for DOM manipulation. It takes info from 

function cardCreation(title, author, numberOfPages, status){
    
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

    //status

    bookStatus=document.createElement('div');
    bookStatus.classList.add('status')
    bookStatus.textContent="Book status: " +status;




    //remove button
    removeButton=document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent='Delete';


    //remove button
    statusChange=document.createElement('button');
    statusChange.classList.add('statusChange');
    statusChange.textContent='Status';    
    

    
    //button for deleting DOM card
    function deleteCard(){
        removeButton.addEventListener('click', function (e) {
            container.removeChild(card);
          });
    }




    //button for status change

    function changeOfStatus(){
        statusChange.addEventListener('click', function (e) {
            
            console.log(e)
          });
    }

    deleteCard();
    changeOfStatus();
    
    
    

    
    
    //appending info to cards
    card.appendChild(titleOfBook)
    card.appendChild(authorOfBook)
    card.appendChild(pageCount)
    card.appendChild(bookStatus)
    card.appendChild(removeButton)
    card.appendChild(statusChange)

    //appends the created card to the container
    container.appendChild(card);


}

const book2 = new Book("Don Quixote","Miguel de Cervantes", 1077, "Unfinished");
const book3 = new Book("1984","George Orwell", 328, "Finished");
const book4 = new Book("The Count of Monte Cristo","Alexandre Dumas", 884, "Finished");


myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)


function fillContainer(){
    for (book in myLibrary){
        cardCreation(myLibrary[book].title, myLibrary[book].author,myLibrary[book].numberOfPages, myLibrary[book].status)
    }
}
fillContainer();

const bookTitle = form.elements['bookTitle']
const bookAuthor = form.elements['bookAuthor']
const bookPageCount = form.elements['pageCount']
let statusOfTheBook;





function submitForm(){
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPageCount.value, statusOfTheBook)
    myLibrary.push(newBook);
    addBookToLibrary();
    bookTitle.value ='';
    bookAuthor.value='';
    bookPageCount.value ='';
    const unfinishedButton = document.getElementById('unfinished');
    const finishedButton = document.getElementById('finished');
    unfinishedButton.checked = false;
    finishedButton.checked = false;


}

