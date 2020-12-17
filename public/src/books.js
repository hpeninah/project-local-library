function findAuthorById(authors, id) {
  return foundAuthor = authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return foundBook = books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //borrowed books and returned books filtered
  const borrowedBooks = books.filter((notReturned) => !notReturned.borrows[0].returned);
  const returnedBooks = books.filter((returned) => returned.borrows[0].returned);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let accountsWhoBorrowed = [];
  accounts.forEach((account) => {book.borrows.forEach((borrower) => {
    if(borrower.id === account.id){
      let match = {...account};
      match.returned = borrower.returned;
      accountsWhoBorrowed.push(match);
    }
  })
})
return accountsWhoBorrowed.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
