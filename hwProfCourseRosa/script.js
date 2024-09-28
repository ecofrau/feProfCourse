const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
const pagesInput = document.getElementById('pages');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const bookList = document.getElementById('book-list');

// Function to create a new book element
function createBookElement(title, author, year, pages) {
    const li = document.createElement('li');
    li.innerHTML =             <span>${title} by ${author} (${year}) - ${pages} pages</span>             <button class="delete-btn">Delete</button>        ;
    bookList.appendChild(li);
}

// Event listener for form submission
bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const pages = pagesInput.value;
    createBookElement(title, author, year, pages);
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
    pagesInput.value = '';
});

// Event listener for book deletion
bookList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
