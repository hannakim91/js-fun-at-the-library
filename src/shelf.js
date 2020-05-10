module.exports = {
  shelfBook: shelfBook,
  // unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};


function shelfBook(bookName, shelf) {

  shelf.push(bookName);
  return shelf;
};
