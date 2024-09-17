let books = JSON.parse(localStorage.getItem("books")) || [];

// Query selectors for the input fields and buttons
const BkName = document.querySelector(".BkName");
const AName = document.querySelector(".AName");
const Year = document.querySelector(".Year");

const btnA = document.querySelector(".btnA"); // Button for adding books
const list = document.querySelector(".list"); // UL or div to display the books list
const container2 = document.querySelector(".container2");

// Add Book function
const AddBook = (AuthorName, BookName, BookYear) => {
  const newBook = {
    AuthorName: AuthorName,
    BookName: BookName,
    BookYear: BookYear,
    id: books.length,
  };
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  return newBook;
};

// Remove Book function
const RemoveBook = (BookName) => {
  const BookIndex = books.findIndex((book) => book.BookName === BookName);
  if (BookIndex !== -1) {
    const deletedBook = books.splice(BookIndex, 1);
    const reciev = document.querySelector(".reciev");
    const p = document.createElement("p");
    p.setAttribute("class", "ptag");
    p.innerHTML = `Successfully deleted ${deletedBook[0].BookName}!`;
    reciev.append(p);
    localStorage.setItem("books", JSON.stringify(books));
    setTimeout(() => {
      reciev.removeChild(p);
    }, 2000);
  }
};



// Edit functionality
let UserChoice = null;
const container3 = document.querySelector(".container3");
container3.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT" && e.target.type === "radio") {
    UserChoice = e.target.value;
    console.log("UserChoice updated to:", UserChoice);
  }
});

// Function to handle the book edit
function handleUserEdit(BookChoice, Value) {
  const userChoice = UserChoice;

  const index = books.findIndex((book) => book.BookName === BookChoice);
  if (index !== -1) {
    if (userChoice === "AuthorName") {
      books[index].AuthorName = Value;
    } else if (userChoice === "BookName") {
      books[index].BookName = Value;
    } else if (userChoice === "Year") {
      books[index].BookYear = Value;
    }

    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
  } else {
    console.log("Book not found.");
  }
}

// Render books function
const renderBooks = () => {
  list.innerHTML = ""; // Clear the list before re-rendering
  books.forEach((book) => {
    const li = document.createElement("li");
    li.classList.add("olchild");

    const p1 = document.createElement("p");
    p1.innerHTML = `Book Name: <span class="italy">${book.BookName}</span>`;
    
    const p2 = document.createElement("p");
    p2.innerHTML = `Author Name: <span class="italy">${book.AuthorName}</span>`;
    
    const p3 = document.createElement("p");
    p3.innerHTML = `Year Published: <span class="italy">${book.BookYear}</span>`;
    
    const btn = document.createElement("button");
    btn.innerText = "Remove Book";
    btn.classList.add("btn", "btnB");
    
    const childA = document.createElement("div");
    childA.append(p1, p2, p3);
    li.appendChild(childA);
    li.appendChild(btn);
    list.appendChild(li);

    // Add remove book functionality to the dynamically created buttons
    btn.addEventListener("click", () => {
      RemoveBook(book.BookName);
      renderBooks();
    });
  });
};

// Initial render on page load
renderBooks();

// Add book on button click
btnA.addEventListener("click", () => {
  let authorName = AName.value;
  let bookName = BkName.value;
  let year = Year.value;
  container2.style.display = "block";
  if (authorName && bookName && year) {
    AddBook(authorName, bookName, year);
    renderBooks();

    // Clear input fields after adding the book
    AName.value = "";
    BkName.value = "";
    Year.value = "";
  } else {
    alert("All fields are required.");
  }
});


// Edit button listener
const Bname = document.querySelector(".Bname");
const val = document.querySelector(".val");
const btnBEdit = document.querySelector(".btnBEdit"); // Assuming the edit button is .btnBEdit
btnBEdit.addEventListener("click", () => {
  const BookChoice = Bname.value;
  const Value = val.value;
  if (BookChoice && Value) {
    handleUserEdit(BookChoice, Value);
  } else {
    alert("Both fields are required for editing.");
  }
});
