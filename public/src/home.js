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
let genreList = books.map((book) => book.genre);
const commonGenreList = [];
//nest genres into array
let allGenres = [];
for(let genre in genreList){
  allGenres.push(genreList.filter(filteredBook => filteredBook === genreList[genre]));
}
//create object and push to return array while checking if genre exists in commonGenreList
let existingGenreList = [];
for(let index in allGenres){
  if(!existingGenreList.some((bookGenre) => bookGenre === allGenres[index][0])){
    existingGenreList.push(allGenres[index][0]);
    commonGenreList.push({name: allGenres[index][0], count: allGenres[index].length});
  }
}
return commonGenreList.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1).splice(0,5);
}

function getMostPopularBooks(books) {
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
