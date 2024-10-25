// Function to store book details in localStorage
function addBookToLocalStorage(title, author, price, rating, imageUrl) {
  // Create a book object
  const book = {
      title: title,
      author: author,
      price: price,
      rating: rating,
      imageUrl: imageUrl
  };

  // Get existing books from localStorage, or initialize an empty array if none exist
  const books = JSON.parse(localStorage.getItem('books')) || [];

  // Add the new book to the array
  books.push(book);

  // Save the updated books array back to localStorage
  localStorage.setItem('books', JSON.stringify(books));
}

// Function to display books from localStorage on the main page
function displayBooks() {
  // Get books from localStorage
  const books = JSON.parse(localStorage.getItem('books')) || [];

  // Get the container where books will be displayed
  const box = document.querySelector('.box');
  box.innerHTML = ''; // Clear existing content

  // Loop through the books and create HTML for each
  books.forEach(book => {
      const bookContainer = document.createElement('fieldset');
      bookContainer.classList.add('product');

      const bookHtml = `
          <div>
              <div class="b">
                  <button onclick="ToggleHeart(this)" class="heart-btn">
                      <i class="fa-solid fa-heart"></i>
                  </button>
              </div>
              <img src="${book.imageUrl}" alt="${book.title}" /><br />
              <small>${book.title}</small><br />
              <small>${book.author}</small><br />
              <h3>₹${book.price}</h3>
              <div class="star">
                  <i class="fa-solid fa-star"><p>${book.rating}</p></i>
              </div>
              <br />
              <button type="button">Buy</button>
          </div>
      `;

      bookContainer.innerHTML = bookHtml;
      box.appendChild(bookContainer);
  });
}

// Hook into the form submission
document.getElementById('sellForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Get form data
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const price = document.getElementById('price').value;
  const rating = document.getElementById('rating').value;
  const imageUrl = document.getElementById('image').value;

  // Store the book in localStorage
  addBookToLocalStorage(title, author, price, rating, imageUrl);

  // Create a new book entry dynamically
  const bookContainer = document.createElement('fieldset');
  bookContainer.classList.add('product');

  const bookHtml = `
      <div>
          <div class="b">
              <button onclick="ToggleHeart(this)" class="heart-btn">
                  <i class="fa-solid fa-heart"></i>
              </button>
          </div>
          <img src="${imageUrl}" alt="${title}" /><br />
          <small>${title}</small><br />
          <small>${author}</small><br />
          <h3>₹${price}</h3>
          <div class="star">
              <i class="fa-solid fa-star"><p>${rating}</p></i>
          </div>
          <br />
          <button type="button">Buy</button>
      </div>
  `;

  bookContainer.innerHTML = bookHtml;
  document.querySelector('.box').appendChild(bookContainer);

  // Clear the form after submission
  document.getElementById('sellForm').reset();
});

// Display books when the page loads
document.addEventListener('DOMContentLoaded', displayBooks);

function ToggleHeart(element) {
  element.classList.toggle('liked'); // Toggle a liked state
}
