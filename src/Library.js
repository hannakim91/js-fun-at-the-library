

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};

function createLibrary(name) {
  var libraryObject = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  console.log(libraryObject);
  return libraryObject;
};

function addBook(libraryObject, bookObject) {

};
