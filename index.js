import Store from './modules/store.js';
import UI from './modules/UI.js';
import Book from './modules/book.js';
import formattedDate from './modules/date.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

const dateElement = document.querySelector('#date');
dateElement.textContent = formattedDate;

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);
  UI.addBookToList(book);
  Store.addBook(book);
  UI.clearFields();
});

document.querySelector('#books').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

const list = document.querySelector('#list');
const addNew = document.querySelector('.nav-item2');
const contact = document.querySelector('#contact');
const books = document.querySelector('#books');
const form = document.querySelector('#form');
const awesome = document.querySelector('.awesome');
const hr = document.querySelector('.book-new');
const contactSection = document.querySelector('.contact');

form.classList.add('hidden');
contactSection.classList.add('hidden');
list.style.textDecoration = ('underline');
hr.classList.add('hidden');

list.addEventListener('click', () => {
  list.style.textDecoration = ('underline');
  addNew.style.textDecoration = ('none');
  contact.style.textDecoration = ('none');
  form.classList.add('hidden');
  books.classList.remove('hidden');
  contactSection.classList.add('hidden');
  awesome.classList.remove('hidden');
});

addNew.addEventListener('click', () => {
  addNew.style.textDecoration = ('underline');
  list.style.textDecoration = ('none');
  contact.style.textDecoration = ('none');
  form.classList.remove('hidden');
  books.classList.add('hidden');
  contactSection.classList.add('hidden');
  awesome.classList.add('hidden');
  hr.classList.add('hidden');
});

contact.addEventListener('click', () => {
  addNew.style.textDecoration = ('none');
  list.style.textDecoration = ('none');
  contact.style.textDecoration = ('underline');
  form.classList.add('hidden');
  books.classList.add('hidden');
  awesome.classList.add('hidden');
  contactSection.classList.remove('hidden');
});
