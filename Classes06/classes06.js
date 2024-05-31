class Books {
  constructor(_title, _author, _isbn, _numCopies) {
    this.title = _title;
    this.author = _author;
    this.isbn = _isbn;
    this.numCopies = _numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies <= 0) {
      return `Book Name '${this.title}' written by '${this.author}' with ISBN number '${this.isbn}' is out of stock`;
    } else if (this.numCopies < 10) {
      return `Book Name '${this.title}' written by '${this.author}' with ISBN number '${this.isbn}' is low in stock`;
    }
    return `Book Name '${this.title}' written by '${this.author}' with ISBN number '${this.isbn}' is in stock`;
  }

  errorMessage(clEr) {
    clEr.innerHTML = `You can not sell more copies than what is available!`;
  }

  get numberOfCopies() {
    return `Number of copies left are ${this.numCopies}`;
  }

  set newNumberOfCopies(newNumCopies) {
    this.numCopies = newNumCopies;
  }

  sell(numSold = 1) {
    const clEr = document.getElementById("classError");
    clEr.innerHTML = "";
    if (numSold > this.numCopies) {
      this.errorMessage(clEr);
    } else {
      this.numCopies -= numSold;
    }
  }

  restock(numberOfCopies = 5) {
    this.numCopies += numberOfCopies;
  }
}

function processBooks() {
  let title = bookTitle.value;
  let author = authorName.value;
  let isbn = isbnNumber.value;
  let copies = parseInt(numberCopies.value);
  const test1 = new Books(title, author, isbn, copies);
  availMsg.innerHTML = test1.availability;
  numCopies.innerHTML = test1.numberOfCopies;

  butty2.addEventListener("click", () => {
    const dispEr = document.getElementById("classError");
    let amntOfSale = parseInt(salesAmnt.value);
    if (isNaN(amntOfSale)) {
      dispEr.innerHTML = "Please enter a valid number";
    } else if (amntOfSale < 1) {
      dispEr.innerHTML = "Please enter a number greater than Zero";
    } else {
      dispEr.innerHTML = "";
      test1.sell(amntOfSale);
      availMsg.innerHTML = test1.availability;
      numCopies.innerHTML = test1.numberOfCopies;
      salesAmnt.value = "";
    }
  });
  butty3.addEventListener("click", () => {
    const dispEr2 = document.getElementById("classError");
    let amntOfStock = parseInt(stocker.value);
    if (isNaN(amntOfStock)) {
      dispEr2.innerHTML = "Please enter a valid number";
    } else if (amntOfStock < 1) {
      dispEr2.innerHTML = "Please enter a number greater than Zero";
    } else {
      dispEr2.innerHTML = "";
      test1.restock(amntOfStock);
      availMsg.innerHTML = test1.availability;
      numCopies.innerHTML = test1.numberOfCopies;
      stocker.value = "";
    }
  });
  butty4.addEventListener("click", () => {
    const dispEr3 = document.getElementById("classError");
    let setNewStock = parseInt(setStock.value);
    if (isNaN(setNewStock)) {
      dispEr3.innerHTML = "Please enter a valid number";
    } else if (setNewStock < 1) {
      dispEr3.innerHTML = "Please enter a number greater than Zero";
    } else {
      dispEr3.innerHTML = "";
      test1.newNumberOfCopies = setNewStock;
      availMsg.innerHTML = test1.availability;
      numCopies.innerHTML = test1.numberOfCopies;
      setStock.value = "";
    }
  });
}

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const bookTitle = document.getElementById("title");
const authorName = document.getElementById("author");
const isbnNumber = document.getElementById("isbn");
const numberCopies = document.getElementById("copies");
const errMsg = document.getElementById("errorMessage");
const availMsg = document.getElementById("availableMessage");
const numCopies = document.getElementById("numberOfCopies");
const butty = document.getElementById("buttercup");
const butty2 = document.getElementById("buttercup2");
const butty3 = document.getElementById("buttercup3");
const butty4 = document.getElementById("buttercup4");
const salesAmnt = document.getElementById("sales");
const stocker = document.getElementById("stocks");
const setStock = document.getElementById("setter");
let errorMessage = "";

const displayErrorMessage = (error) => {
  if (error.length > 0) {
    errMsg.innerHTML = error;
    errMsg.style.backgroundColor = "red";
  }
};

function checkFields() {
  butty.style.display = "block";
  if (bookTitle.value.length === 0) {
    errorMessage = "Please complete Title of Book";
    bookTitle.focus();
    displayErrorMessage(errorMessage);
  } else if (authorName.value.length === 0) {
    errorMessage = "Please complete Author of Book";
    authorName.focus();
    displayErrorMessage(errorMessage);
  } else if (isbnNumber.value.length === 0) {
    errorMessage = "Please complete the ISBN Number";
    isbnNumber.focus();
    displayErrorMessage(errorMessage);
  } else if (numberCopies.value.length === 0) {
    errorMessage = "Please complete the Number of Copies";
    numberCopies.focus();
    displayErrorMessage(errorMessage);
  } else {
    errMsg.innerHTML = "Process Started";
    errMsg.style.backgroundColor = "steelblue";
    processBooks();
    container.style.display = "none";
    container2.style.display = "block";
  }
}

function restart() {
  location.reload();
}
