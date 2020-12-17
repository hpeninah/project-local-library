function findAccountById(accounts, id) {
  return accounts.find((accountMatch) => accountMatch.id === id); 
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastName1, lastName2) => lastName1.name.last.toLowerCase() > lastName2.name.last.toLowerCase() ? 1 : -1); 
}

function numberOfBorrows(account, books) {
  let borrowedAmount = 0;
  for (let index in books){
    const borrowedBooks = books[index].borrows.filter((book) => book.id === account.id);
    borrowedAmount += borrowedBooks.length;
  }
  return borrowedAmount;
}

function getBooksPossessedByAccount(account, books, authors) {
  let inPossession = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const { id, title, genre, authorId, borrows } = book;
    for (let j = 0; j < borrows.length; j++){
      if (borrows[j].id === account.id && borrows[j].returned === false) {
        for (let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if (author.id === authorId) {
            const bookAndAuthor = { id, title, genre, authorId, author, borrows};
            inPossession.push(bookAndAuthor);
          }
        }
      }
    }
  }
  return inPossession;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
