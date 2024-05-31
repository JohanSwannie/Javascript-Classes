class ElementsBinding {
  constructor(_tag, _listDescr = []) {
    this.listTag = _tag;
    this.listDescr = _listDescr;
  }

  static createTag(description) {
    const liTag = document.createElement("li");
    liTag.textContent = description;
    liTag.style.color = "#FFF";
    return liTag;
  }

  updateTags() {
    while (this.listTag.firstChild) {
      this.listTag.removeChild(this.listTag.firstChild);
    }

    for (let description of this.listDescr) {
      this.listTag.appendChild(ElementsBinding.createTag(description));
    }
  }

  addTags(addTextContent) {
    if (addTextContent > "") {
      const IDX1 = this.listDescr.indexOf(addTextContent);
      if (IDX1 === -1) {
        this.listDescr.push(addTextContent);
        this.updateTags();
      }
    } else {
      this.updateTags();
    }
  }

  removeTags(removeTextContent) {
    const IDX2 = this.listDescr.indexOf(removeTextContent);
    if (IDX2 !== -1) {
      this.listDescr.splice(IDX2, 1);
      alert(this.listDescr.length);
      this.updateTags();
    }
  }
}
const listing = document.getElementById("list");

const nameArray = [
  "Julian",
  "Peter",
  "Paul",
  "Barry",
  "Luke",
  "Andrew",
  "Matthew",
  "Brendan",
  "Graham",
  "Don",
  "James",
  "Carl",
  "Nancy",
  "Dalene",
  "Suzanne",
  "Roy",
  "Mike",
  "Libby",
];

const performTagBinding = new ElementsBinding(listing, nameArray);

performTagBinding.addTags();

const addInputValue = document.getElementById("addValue");

function addItem() {
  performTagBinding.addTags(addInputValue.value);
  addInputValue.value = "";
}

const removeInputValue = document.getElementById("removeValue");

function removeItem() {
  performTagBinding.removeTags(removeInputValue.value);
  removeInputValue.value = "";
}
