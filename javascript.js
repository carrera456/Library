const myLibrary = [];

function Book(title,author,pages,state,synopsis) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.synopsis = synopsis;
  this.id = crypto.randomUUID();
  this.changeStatus = function() {
    switch(this.state){
    case 'Pendent' :
      this.state = 'Llegit';
      break;
    case 'Llegit':
      this.state = 'Pendent';
      break;
    }
  }
   
}

function addBookToLibrary(title,author,pages,state,synopsis) {
// take params, create a book then store it in the array
  const book = new Book(title,author,pages,state,synopsis);
  myLibrary.push(book);
    
}

function removeBookFromLibrary(id){
  myLibrary.splice(myLibrary.findIndex(obj => obj.id === id),1);
}

//creem uns quants llibres per mostrar en pantalla
addBookToLibrary("El Hobbit","J.R.R Tolkien","356","Pendent","Les aventures de Frodo Bolson");
addBookToLibrary("El senyor dels Anells","J.R.R Tolkien","2542","Pendent","La comunitat de l'anell");
addBookToLibrary("Tríptic", "Eva Baltasar", "342", "Llegit", "Històries de maternitat");
addBookToLibrary("El petit príncep", "Antoine de Sant-Excupéry", "85", "Pendent", "La història del petit príncep");


function removeElementsByClass(name){
 for( var i = document.querySelector(name) ;  i != null ; i = document.querySelector(name))
 {
	 i.remove();
 }
}

function removeElementById(id){
  var doc = document.getElementById(id);
  doc.remove();
}

function displayBooks(array){
// crear divs per ensenyar els llibres en pantalla
  //esborrem totes les divisions amb class card
  removeElementsByClass(".card");
  //girem l'array perquè els afegim en ordre invers
  arrayReversed = array.toReversed();
  for (const element of arrayReversed){
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
    container.insertBefore(divCard,container.firstChild);    
  }
  
}

//llancem funció per ensenyar tota la llibreria
displayBooks(myLibrary);

//obrim dialog
const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".close");

addButton.addEventListener("click",() => {
  dialog.showModal();
});
closeButton.addEventListener("click",() =>{
  dialog.close();
});


//lògica per botó de afegir llibre
const submit = document.querySelector(".addBook");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  var form = new FormData(document.querySelector("form"));
  var formElement = document.querySelector("form");
  var valid = formElement.reportValidity();
  if (valid == true)
	{
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
  switch(target.className){
  case 'remove' :
    removeElementById(target.parentElement.id);
    removeBookFromLibrary(target.parentElement.id);
    break;
  case 'changeState':
    myLibrary[myLibrary.findIndex(obj => obj.id == target.parentElement.id)].changeStatus();
    displayBooks(myLibrary);
  }
  
  
})
