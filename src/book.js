// interpolate with 'the' in front

function createTitle(bookIdea) {
  //var bookIdea = `The ${bookIdea}`;
  return bookIdea;
  //return `The ${bookIdea}`;
};

function buildMainCharacter(name, age, pronouns) {
  var bookCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return bookCharacter;
};
//can make values for object dynamic by putting in name, age, pronoun arguments instead

function saveReview(newReview, reviews) {
  if (!reviews.includes(newReview)) {
    return reviews.push(newReview);
  // console.log(reviews);
  //  return
  }
};

function calculatePageCount(bookTitle) {
  // bookTitle = createTitle.length;
  // bookPageCount = bookTitle * 20;
  // return bookPageCount;
  return bookTitle.length * 20;
};
// why does this work -- i don't have bookPageCount in the function at all? -- bookPageCount is a new variable created and assigned the value of calculatePageCount function with bookTitle as the argument passed through

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  };
  console.log(book);
  return book;
};

function editBook(bookTitle/*, bookCharacter, genre*/) {
  // var editedBook = {
  //   title: ghoulBook,
  //   //mainCharacter: bookCharacter,
  //   pageCount: (calculatePageCount(ghoulBook) * 0.75)
  //   //genre: genre
  // } ---- don't create another object / test only looking for one parameter; need to pass and change info within already existing object, not the object itself
  bookTitle.pageCount = bookTitle.pageCount * .75;
  console.log(bookTitle.pageCount);
  return bookTitle.pageCount * .75;
};



module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
