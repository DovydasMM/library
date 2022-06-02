const container = document.querySelector(".container");
const form = document.getElementById('addBook');
const bookTitle = form.elements['bookTitle']
const bookAuthor = form.elements['bookAuthor']
const bookPageCount = form.elements['pageCount']


let statusOfTheBook;
let bookIndex;
let myLibrary = [];


//Book constructor
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
    bookIndex = Number(bookIndex)+1;
    cardCreation(myLibrary[newBookIndex].title, myLibrary[newBookIndex].author,myLibrary[newBookIndex].numberOfPages, myLibrary[newBookIndex].status)
}


//Function for creating DOM elements and implementing them on screen
function cardCreation(title, author, numberOfPages, status){
    
    let card=document.createElement('div');
    card.classList.add('card')
    
    card.dataset.set=Number(bookIndex);

    //title
    titleOfBook=document.createElement('div');
    titleOfBook.classList.add('title')
    titleOfBook.textContent=title

    //author
    authorOfBook=document.createElement('div');
    authorOfBook.classList.add('author')
    authorOfBook.textContent="By " +author;
    
    //pages
    pageCount=document.createElement('div');
    pageCount.classList.add('pages')
    pageCount.textContent=numberOfPages + " pages";

    //status

    bookStatus=document.createElement('div');
    bookStatus.classList.add('status')
    bookStatus.textContent="Book status: " +status;



    //button section
    buttonSection=document.createElement('div');
    buttonSection.classList.add('buttonSection');

    //remove button
    removeButton=document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent='✘';

    //status button





    statusChange=document.createElement('button');
    statusChange.classList.add('statusChange');
    if (status=="Finished"){
        statusChange.textContent = "Read"
        statusChange.classList.add('read')

    } else {
        statusChange.textContent = "Not Read"
        statusChange.classList.add('notRead')
    }
     

    //button for deleting DOM card element
    function deleteCard(){
        removeButton.addEventListener('click', function (e) {
            console.log(card.dataset.set);
            myLibrary.splice(card.dataset.set, 1);
            updateTable();
          });
    }

    //button for status change
    function changeOfStatus(){
        statusChange.addEventListener('click', function (e) {
            myLibrary[card.dataset.set].changeStatus();
            
          });
    }

    
    deleteCard();
    changeOfStatus();
    
    
    //appending info to cards
    card.appendChild(titleOfBook)
    card.appendChild(authorOfBook)
    card.appendChild(pageCount)
    card.appendChild(bookStatus)
    card.appendChild(buttonSection)
    buttonSection.appendChild(statusChange)
    buttonSection.appendChild(removeButton)
    

    //appends the created card to the container
    container.appendChild(card);


}


//books to fill container
const book2 = new Book("Don Quixote","Miguel de Cervantes", 1077, "Unfinished");
const book3 = new Book("1984","George Orwell", 328, "Finished");
const book4 = new Book("The Count of Monte Cristo","Alexandre Dumas", 884, "Finished");
myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)
//


function fillContainer(){
    for (book in myLibrary){
        bookIndex=book;
        cardCreation(myLibrary[book].title, myLibrary[book].author,myLibrary[book].numberOfPages, myLibrary[book].status)
    }
}
fillContainer();






//take info from sumbitions
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
//updates all table, by removing every card and putting new ones in
function updateTable(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    fillContainer()
}



//Prototype change, to implement status change
Book.prototype.changeStatus = function(){
    if (this.status == "Unfinished"){
        this.status = "Finished"
    }
    else {
            this.status = "Unfinished"
        }
    updateTable()
    }
