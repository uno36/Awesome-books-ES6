/* eslint-disable max-classes-per-file */
export default class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();
    const index = books.findIndex((book) => book.title === title);
    if (index !== -1) {
      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
    }
  }

  static clearStorage() {
    localStorage.removeItem("books");
  }
}
