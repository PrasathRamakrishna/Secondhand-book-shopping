document.addEventListener('DOMContentLoaded', () => {
    function toggleButtonColor(button) {
        if (button) { // Check if button exists
            button.style.color = (button.style.color === "red") ? "grey" : "red";
        }
    }

    // Attach event listeners to buttons
    for (let i = 1; i <= 18; i++) {
        const btn = document.getElementById(`btn${i}`);
        if (btn) {
            btn.addEventListener('click', () => toggleButtonColor(btn));
        }
    }

    // Search function
    function search() {
        const headings = document.querySelectorAll(".heading");
        const searchbox = document.getElementById("search-item").value.toUpperCase();
        headings.forEach((heading) => {
            const productContainer = heading.nextElementSibling;
            if (productContainer) {
                const products = productContainer.querySelectorAll(".product");
                let visible = false;

                products.forEach((product) => {
                    const textValue = product.querySelector("small")?.textContent || "";
                    if (textValue.toUpperCase().includes(searchbox)) {
                        product.style.display = "";
                        visible = true;
                    } else {
                        product.style.display = "none";
                    }
                });

                heading.style.display = visible ? "" : "none";
            }
        });
    }

    // Attach search function to the search button
    const searchButton = document.querySelector('.search button');
    if (searchButton) {
        searchButton.addEventListener('click', search);
    }
});

// Function to display books on the main page
function displayBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];

    const bookDisplay = document.getElementById('bookDisplay');

    // Clear the display area first
    bookDisplay.innerHTML = '';

    // Loop through the books and create HTML for each one
    books.forEach(book => {
        const bookHtml = `
            <div class="product">
                <div class="b">
                    <button onclick="ToggleHeart(this)" class="heart-btn">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <img src="${book.imageUrl}" alt="${book.title}" />
                <small>${book.title}</small>
                <small>${book.author}</small>
                <div class='info'>
                <h3>₹${book.price}</h3>
                <div class="star">
                    <i class="fa-solid fa-star"><p>${book.rating}</p></i>
                </div></div>
                <button type="button" class='buy-btn'><a href='buy.html'>Buy</a></button>
            </div>
        `;

        // Add the book HTML to the display area
        bookDisplay.innerHTML += bookHtml;
    });
}

// Call the function to display the books when the page loads
window.onload = displayBooks;



