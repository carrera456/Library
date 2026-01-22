const myLibrary = [];

///////////////////////////////////////////////////////////////
// function Book(title,author,pages,state,synopsis) {	     //
//     this.title = title;				     //
//     this.author = author;				     //
//     this.pages = pages;				     //
//     this.state = state;				     //
//     this.synopsis = synopsis;			     //
//     this.id = crypto.randomUUID();			     //
//     this.changeStatus = function() {			     //
// 	switch(this.state){				     //
// 	case 'Pendent' :				     //
// 	    this.state = 'Llegit';			     //
// 	    break;					     //
// 	case 'Llegit':					     //
// 	    this.state = 'Pendent';			     //
// 	    break;					     //
// 	}						     //
//     }						     //
//    							     //
// }							     //
///////////////////////////////////////////////////////////////

class Book {
    constructor(title, author, pages, state, synopsis) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.state = state;
	this.synopsis = synopsis;
	this.id = crypto.randomUUID();
    }

    get title() {
	return this._title;
    }
    get author() {
	return this._author;
    }
    get pages() {
	return this._pages;
    }
    get state() {
	return this._state;
    }
    get synopsis() {
	return this._synopsis;
    }
    set title(value) {
	this._title = value;
    }

    set author(value) {
	this._author = value;
    }

    set pages(value) {
	this._pages = value;
    }

    set state(value) {
	this._state = value;
    }

    set synopsis(value) {
	this._synopsis = value;
    }
    changeStatus() {
	switch (this.state) {
	case 'Pendent':
	    this.state = 'Llegit';
	    break;
	case 'Llegit':
	    this.state = 'Pendent';
	    break;
	}
    }
}

function addBookToLibrary(title, author, pages, state, synopsis) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages, state, synopsis);
    myLibrary.push(book);

}

function removeBookFromLibrary(id) {
    myLibrary.splice(myLibrary.findIndex(obj => obj.id === id), 1);
}

//creem uns quants llibres per mostrar en pantalla
addBookToLibrary("El Hobbit", "J.R.R Tolkien", "356", "Pendent", "Les aventures de Frodo Bolson");
addBookToLibrary("El senyor dels Anells", "J.R.R Tolkien", "2542", "Pendent", "La comunitat de l'anell");
addBookToLibrary("Tríptic", "Eva Baltasar", "342", "Llegit", "Històries de maternitat");
addBookToLibrary("El petit príncep", "Antoine de Sant-Excupéry", "85", "Pendent", "La història del petit príncep");


function removeElementsByClass(name) {
    for (var i = document.querySelector(name); i != null; i = document.querySelector(name)) {
	i.remove();
    }
}

function removeElementById(id) {
    var doc = document.getElementById(id);
    doc.remove();
}

function displayBooks(array) {
    // crear divs per ensenyar els llibres en pantalla
    //esborrem totes les divisions amb class card
    removeElementsByClass(".card");
    //girem l'array perquè els afegim en ordre invers
    arrayReversed = array.toReversed();
    for (const element of arrayReversed) {
	const container = document.querySelector(".container");
	//creem nova div
	const divCard = document.createElement("div");
	divCard.classList.add("card");
	divCard.id = element.id;
	//titol
	const divTitolLabel = document.createElement("div");
	divTitolLabel.classList.add("label");
	divTitolLabel.textContent = "Títol";
	divCard.appendChild(divTitolLabel);
	const divTitolInfo = document.createElement("div");
	divTitolInfo.classList.add("info");
	divTitolInfo.textContent = element.title;
	divCard.appendChild(divTitolInfo);
	//Autor
	const divAutorLabel = document.createElement("div");
	divAutorLabel.classList.add("label");
	divAutorLabel.textContent = "Autor";
	divCard.appendChild(divAutorLabel);
	const divAutorInfo = document.createElement("div");
	divAutorInfo.classList.add("info");
	divAutorInfo.textContent = element.author;
	divCard.appendChild(divAutorInfo);
	//Pàgines
	const divPagsLabel = document.createElement("div");
	divPagsLabel.classList.add("label");
	divPagsLabel.textContent = "Pàgines";
	divCard.appendChild(divPagsLabel);
	const divPagsInfo = document.createElement("div");
	divPagsInfo.classList.add("info");
	divPagsInfo.textContent = element.pages;
	divCard.appendChild(divPagsInfo);
	//Sinopsis
	const divSinopsisLabel = document.createElement("div");
	divSinopsisLabel.classList.add("label");
	divSinopsisLabel.textContent = "Sinopsis";
	divCard.appendChild(divSinopsisLabel);
	const divSinopsisInfo = document.createElement("div");
	divSinopsisInfo.classList.add("info");
	divSinopsisInfo.textContent = element.synopsis;
	divCard.appendChild(divSinopsisInfo);
	//Estat
	const divEstatLabel = document.createElement("div");
	divEstatLabel.classList.add("label");
	divEstatLabel.textContent = "Estat";
	divCard.appendChild(divEstatLabel);
	const divEstatInfo = document.createElement("div");
	divEstatInfo.classList.add("estatCard");
	divEstatInfo.textContent = element.state;
	divCard.appendChild(divEstatInfo);
	const buttonChangeState = document.createElement("button");
	buttonChangeState.classList.add("changeState");
	divCard.appendChild(buttonChangeState);
	const buttonRemove = document.createElement("button");
	buttonRemove.classList.add("remove");
	divCard.appendChild(buttonRemove);

	//afegim a contenidor
	// container.appendChild(divCard);
	container.insertBefore(divCard, container.firstChild);
    }

}

//llancem funció per ensenyar tota la llibreria
displayBooks(myLibrary);

//obrim dialog
const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".close");

addButton.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    dialog.close();
});


//gestió d'errors del formulari
//titol
const titolInput = document.getElementById("titol");
const titolError = document.getElementById("titolError");

titolInput.addEventListener("input", (event) => {
    if (titolInput.validity.valid) {
	titolError.textContent = "";
    }
    else {
	titolInput.className = "errorInput"
	showTitleInputError();
    }
})

function showTitleInputError() {
    if (titolInput.validity.valueMissing) {
	titolError.textContent = "You must enter a name for the book";
    }
    else if (titolInput.validity.tooShort) {
	titolError.textContent = `Title must be at least ${titolInput.minLength}`
    }
    else if (titolInput.validity.tooLong) {
	titolError.textContent = `Title must be maximum ${titolInput.maxLength}`
    }

}

//autor
const autorInput = document.getElementById("autor");
const autorError = document.getElementById("autorError");

autorInput.addEventListener("input", (event) => {
    if (autorInput.validity.valid) {
	autorError.textContent = "";
    }
    else {
	autorInput.className = "errorInput"
	showAuthorInputError();
    }
})

function showAuthorInputError() {
    if (autorInput.validity.valueMissing) {
	autorError.textContent = "You must enter a name for author";
    }
    else if (autorInput.validity.tooShort) {
	autorError.textContent = `Author must be at least ${autorInput.minLength}`
    }
    else if (autorInput.validity.tooLong) {
	autorError.textContent = `Author must be maximum ${autorInput.maxLength}`
    }

}
//pagines

const paginesInput = document.getElementById("pagines");
const paginesError = document.getElementById("paginesError");

paginesInput.addEventListener("input", (event) => {
    if (paginesInput.validity.valid) {
	paginesError.textContent = "";
    }
    else {
	paginesInput.className = "errorInput"
	showPaginesInputError();
    }
})

function showPaginesInputError() {
    if (paginesInput.validity.valueMissing) {
	paginesError.textContent = "You must enter the pages number";
    }
    else if (paginesInput.validity.rangeUnderflow) {
	paginesError.textContent = `Page numbers be at least ${paginesInput.min}`;
    }
    else if (paginesInput.validity.rangeOverflow) {
	paginesError.textContent = `Maximum page number exceeded (${paginesInput.max})`;
    }

}

//sinopsis
const sinopsisInput = document.getElementById("sinopsis");
const sinopsisError = document.getElementById("sinopsisError");

sinopsisInput.addEventListener("input", (event) => {
    if (sinopsisInput.validity.valid) {
	sinopsisError.textContent = "";
    }
    else {
	sinopsisInput.className = "errorInput"
	showSinopsisInputError();
    }
})

function showSinopsisInputError() {
    if (sinopsisInput.validity.valueMissing) {
	sinopsisError.textContent = "You must enter some resume.";
    }
    else if (sinopsisInput.validity.tooShort) {
	sinopsisError.textContent = `Sinopsis must be at least  ${sinopsisInput.minLength} words`;
    }
    else if (sinopsisInput.validity.tooLong) {
	sinopsisError.textContent = `Sinopsis must be maximum  (${sinopsisInput.maxLength}) words`;
    }

}

//lògica per botó de afegir llibre
const submit = document.querySelector(".addBook");
submit.addEventListener("click", (event) => {
    //control d'errors
    event.preventDefault();
    if (!titolInput.validity.valid){
	showTitleInputError();	
    }
    if (!autorInput.validity.valid){
	showAuthorInputError();
    }
    if(!paginesInput.validity.valid){
	showPaginesInputError();
    }
    if(!sinopsisInput.validity.valid){
	showSinopsisInputError();
    }
    
    var form = new FormData(document.querySelector("form"));
    var formElement = document.querySelector("form");
    // var valid = formElement.reportValidity();
    if (valid == true) {
	addBookToLibrary(form.get("titol"), form.get("autor"), form.get("pagines"), form.get("estat"), form.get("sinopsis"));
	dialog.close();
	displayBooks(myLibrary);
	document.querySelector("form").reset();
    }
})

//lògica per botó de esborrar
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    let target = e.target;
    switch (target.className) {
    case 'remove':
	removeElementById(target.parentElement.id);
	removeBookFromLibrary(target.parentElement.id);
	break;
    case 'changeState':
	myLibrary[myLibrary.findIndex(obj => obj.id == target.parentElement.id)].changeStatus();
	displayBooks(myLibrary);
    }


})
