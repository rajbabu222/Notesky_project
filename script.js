// Selecting popup overlay popup box button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopupbutton = document.getElementById("cancel-popup");

cancelpopupbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container, add-book, book-title-input, book-auther-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookautherinput = document.getElementById("book-auther-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    // Validation to ensure all fields are filled
    if (
        booktitleinput.value.trim() === "" ||
        bookautherinput.value.trim() === "" ||
        bookdescriptioninput.value.trim() === ""
    ) {
        alert("Please fill in all fields before adding the note.");
        return;
    }

    // Create a new note container
    var div = document.createElement("div");
    div.setAttribute("class", "booksky-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookautherinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);

    // Clear the form inputs
    booktitleinput.value = "";
    bookautherinput.value = "";
    bookdescriptioninput.value = "";

    // Hide the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}
