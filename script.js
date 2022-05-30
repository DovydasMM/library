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


let book1 = new Book("Tarp pilku debesu","Ruta Sepetys", 367, "fully read");
const container = document.querySelector(".container");





function cardCreation(pavad, autorius, psl){
    let knyga1=document.createElement('div');
    knyga1.classList.add('card')
    
    pavadinimas=document.createElement('div');
    pavadinimas.classList.add('title')
    pavadinimas.textContent="The title is: "+ pavad
    knyga1.appendChild(pavadinimas)
    
    authoriuss=document.createElement('div');
    authoriuss.classList.add('author')
    authoriuss.textContent="Author " +autorius;
    knyga1.appendChild(authoriuss)
    
    puslapis=document.createElement('div');
    puslapis.classList.add('puslapiai')
    puslapis.textContent=psl + " pages";
    knyga1.appendChild(puslapis)
    container.appendChild(knyga1);
}



const book2 = new Book("Tarp pilku debesu","Ruta Sepetys", 367, "fully read");
const book3 = new Book("Tbaba","xxxtys", 4444, "fully read");
const book4 = new Book("Tadssdu debesu","RdsadasdSepetys", 711, "fully read");





cardCreation(book2.title,book2.author,book2.numberOfPages)
cardCreation(book3.title,book3.author,book3.numberOfPages)
cardCreation(book4.title,book4.author,book4.numberOfPages)


console.log(book4.title)
