const myLibrary = [];

function Book(title,author,pages,state,synopsis) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.synopsis = synopsis;
   
}

function addBookToLibrary(title,author,pages,state,synopsis) {
// take params, create a book then store it in the array
  const book = new Book(title,author,pages,state,synopsis);
  myLibrary.push(book);
    
}

//creem uns quants llibres per mostrar en pantalla
addBookToLibrary("El Hobbit","J.R.R Tolkien","356","Pendent","Les aventures de Frodo Bolson");
addBookToLibrary("El senyor dels Anells","J.R.R Tolkien","2542","Pendent","La comunitat de l'anell");
addBookToLibrary("Tríptic", "Eva Baltasar", "342", "Llegit", "Històries de maternitat");
addBookToLibrary("El petit príncep", "Antoine de Sant-Excupéry", "85", "Pendent", "La història del petit príncep");

function displayBooks(array){

  for (const element of array){
    const container = document.querySelector(".container");
    //creem nova div
    const divCard = document.createElement("div");
    divCard.classList.add("card");
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
    divEstatInfo.classList.add("info");
    divEstatInfo.textContent = element.state;
    divCard.appendChild(divEstatInfo);


    //afegim a contenidor
    container.appendChild(divCard);

  }
  
//lògica per mostrar llibres a la pàgina.
//agafem la posició del container
}

displayBooks(myLibrary);





