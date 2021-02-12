function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let booksBorrowed = 0;
  for (let index in books){
    const borrowed = books[index].borrows.filter( (borrowedBook) => !borrowedBook.returned).length;
    booksBorrowed += borrowed;
  }
  return booksBorrowed;
}

function getMostCommonGenres(books) {
  let genreListCount = {};
  let commonGenreList = [];

  for (let i = 0; i < books.length; i++){
    if (genreListCount[books[i]["genre"]]){
      genreListCount[books[i]["genre"]]= genreListCount[books[i]["genre"]] + 1;
    } else {
      genreListCount[books[i]["genre"]] = 1;
    }
  }
  Object.keys(genreListCount).map((genre)=> commonGenreList.push({name:genre, count: genreListCount[genre]}))
  return commonGenreList.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1).splice(0,5)
}


function getMostPopularBooks(books) {
  let book = helperForPopularBook(books);
  return book;
}
function helperForPopularBook(books){
  let popularBooksList = [];
  for (let index in books){
    const popular = books[index].borrows.length;
    const titles = books[index].title;
    popularBooksList.push({name: titles, count: popular})
  }
  return popularBooksList.sort((popularList1, popularList2) => popularList1.count > popularList2.count ? -1 : 1).slice(0,5);
}


function getMostPopularAuthors(books, authors) {
  let popularAuthorList = [];
  for(let index in authors){
    const popularAuthor = authors[index];
    const authorId = authors[index].id;
    const number = books.filter((book) => book.authorId === authorId).reduce((acc, book) => acc + book.borrows.length, 0);
    popularAuthorList.push({name:`${popularAuthor.name.first} ${popularAuthor.name.last}`,
    count: number});
  }
  return popularAuthorList.sort((authorList1, authorList2) => authorList1.count > authorList2.count ? -1 : 1).slice(0,5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
