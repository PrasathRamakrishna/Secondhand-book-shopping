document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle button color
    function toggleButtonColor(button) {
        if (button) {
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
    
    // Form validation logic
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const storedEmail = "123@gmail.com";
    const storedPassword = "1234";

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function checkValidity() {
        const emailVal = emailInput.value.trim();
        const passwordVal = passwordInput.value.trim();

        let valid = true;

        if (emailVal === "") {
            setError(emailInput, "Email is required");
            valid = false;
        } else if (emailVal !== storedEmail) {
            setError(emailInput, "Email is incorrect");
            valid = false;
        } else {
            setSuccess(emailInput);
        }

        if (passwordVal === "") {
            setError(passwordInput, "Password is required");
            valid = false;
        } else if (passwordVal !== storedPassword) {
            setError(passwordInput, "Password is incorrect");
            valid = false;
        } else {
            setSuccess(passwordInput);
        }

        return valid;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (checkValidity()) {
            console.log("Form submitted successfully!");
            // Redirect or perform further actions here
            // location.href = "some-page.html";
        } else {
            console.log("Form validation failed.");
        }
    });
});
