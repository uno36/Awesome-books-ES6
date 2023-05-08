/* eslint-disable max-classes-per-file */
import Store from './store.js';

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const details = document.createElement('div');
    const list = document.querySelector('#books');

    details.style.backgroundColor = 'rgba(125, 125, 125, 0.3)';
    details.innerHTML = `
          <h5>"${book.title}" by <span>${book.author}</span></h5>
          <input type="submit" class="remove" value="Remove">        
        `;
    list.appendChild(details);
    const numBooks = list.children.length;
    if (numBooks % 2 === 0) {
      details.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }

  static deleteBook(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.remove();
      const title = el.previousElementSibling.previousElementSibling.textContent;
      Store.removeBook(title);
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default UI;
