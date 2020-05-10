module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};

//why doesn't push work but unshift does?
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i,1);
    }
  }
};

function listTitles(shelf) {
  var listOfTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    listOfTitles.push(shelf[i].title);
  }
  console.log(listOfTitles.join(', '));
  return listOfTitles.join(', ');
};

function searchShelf(shelf, book) {
  var nameOfBook = "";
  for (var i = 0; i < shelf.length; i++) {
    var nameOfBook = shelf[i].title
    if (nameOfBook === book) {
      console.log(nameOfBook, book);
      console.log(true);
      return true;
    // } else if (shelf[i].title !== book ) {
    //   console.log(shelf[i].title)
    //   console.log(false);
    //   return false;
    // }
  } else {
      console.log(nameOfBook, book);
      console.log(false);
      return false; }
  }
};

// function searchShelf(shelf, book) {
//   console.log(shelf[0].title, shelf[1].title, book);
//   if (shelf[1].title === book) {
//     console.log(true);
//     return true;
//   } else {
//     return false;
//   }
// }
