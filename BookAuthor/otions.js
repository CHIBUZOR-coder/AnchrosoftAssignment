// // // // Function to return the updated UserChoice value globally
// // // function useUserChoice() {
// // //   return UserChoice; // Return the current value of the global variable
// // // }

// // // // Example of using `useUserChoice` outside the event listener
// // // setTimeout(() => {
// // //   const choice = useUserChoice(); // Get the updated value
// // //   if (choice) {
// // //     console.log(
// // //       "Accessing UserChoice globally after user interaction:",
// // //       choice
// // //     );

// // //     // Conditional logic based on the global UserChoice
// // //     if (choice === "option1") {
// // //       console.log("User chose option 1 in global scope");
// // //     } else if (choice === "option2") {
// // //       console.log("User chose option 2 in global scope");
// // //     } else {
// // //       console.log("User chose something else in global scope");
// // //     }
// // //   } else {
// // //     console.log("No choice made yet.");
// // //   }
// // // }, 5000);



// // let UserChoice = null; // Declare globally

// // const container3 = document.querySelector(".container3");

// // // Event listener for updating the global UserChoice when a radio button is clicked
// // container3.addEventListener("click", (e) => {
// //   const clickedElement = e.target;
// //   if (clickedElement.tagName === "INPUT" && clickedElement.type === "radio") {
// //     UserChoice = clickedElement.value; // Update the global variable on radio button click
// //     console.log("UserChoice updated to:", UserChoice);

// //     // Call the function where the conditional logic is executed
// //     handleUserChoice();
// //   }
// // });

// // // // Function with the conditional logic to run after UserChoice is updated
// // function handleUserChoice(changeItem, Value) {
// //   if (UserChoice === "AuthorName") {
// //     const UpdateBook = { ...books };
// //     const index = UpdateBook.findIndex((book) => index === changeItem);
// //     if (index !== -1) {
// //       UpdateBook.BookName = Value;
// //     }
// //     console.log("User chose Author Name");
// //     // Add your code for option 1 here
// //   } else if (UserChoice === "BookName") {
// //     console.log("User chose Book Name");
// //     // Add your code for option 2 here
// //   } else if (UserChoice === "Year") {
// //     console.log("User chose Year");
// //   } else {
// //     console.log("User chose something else");
// //   }
// // }




// let books = JSON.parse(localStorage.getItem("books")) || [];

// const BkName = document.querySelector(".BkName");
// console.log(BkName);
// const AName = document.querySelector(".AName");
// console.log(AName);
// const Year = document.querySelector(".Year");
// console.log(Year);

// const AddBook = (AuthorName, BookName, BookYear) => {
//   const Books = {
//     AuthorName: AuthorName,
//     BookName: BookName,
//     BookYear: BookYear,
//     id: books.length,
//   };

//   books.push(Books);
//   localStorage.setItem("books", JSON.stringify(books));
//   return Books;
// };

// // console.log(books);
// // AddBook("james", "myBook", 1990);
// //Remove
// const RemoveBook = (BookName) => {
//   const BookIndex = books.findIndex((Books) => Books.BookName === BookName);

//   if (BookIndex !== -1) {
//     const DeleteBook = books.splice(BookIndex, 1);
//     const reciev = document.querySelector(".reciev");
//     const p = document.createElement("p");
//     p.setAttribute("class", "ptag");
//     p.innerHTML = `Successfully deleted ${DeleteBook[0].BookName}!`;
//     reciev.append(p);
//     localStorage.setItem("books", JSON.stringify(books));

//     setTimeout(() => {
//       reciev.removeChild(p);
//     }, 2000);
//   }
// };

// // ********************************************
// //********************************************** */

// const btnA = document.querySelector(".btnA");
// console.log(btnA);

// const list = document.querySelector(".list");
// const renderBooks = () => {
//   // main2 = document.querySelector(".main2");
//   // main2.style.display = "none";
//   list.innerHTML = ""; // Clear the list before re-rendering
//   books.forEach((book) => {
//     const li = document.createElement("li");
//     li.classList.add("olchild");
//     const p1 = document.createElement("p");
//     p1.innerHTML = `<P>Book Name: <span class="italy">${book.BookName}</span>  </P>`;
//     const p2 = document.createElement("p");
//     p2.innerHTML = `<P>Book Name: <span class="italy">${book.AuthorName}</span>  </P>`;
//     const p3 = document.createElement("p");
//     p3.innerHTML = `<P>Book Name: <span class="italy">${book.BookYear}</span>  </P>`;
//     const btn = document.createElement("span");
//     btn.innerText = "Remove Book";
//     const childA = document.createElement("div");
//     btn.classList.add("btn", "btnB");
//     const children = [p1, p2, p3];
//     children.forEach((child) => {
//       childA.appendChild(child);
//     });
//     li.appendChild(childA);
//     li.appendChild(btn);
//     list.appendChild(li);

//     btn.addEventListener("click", () => {
//       RemoveBook(book.BookName);
//       renderBooks();
//     });

//     // renderBooks();
//   });
// };

// // Initial render on page load
// renderBooks();
// const container2 = document.querySelector(".container2");
// btnA.addEventListener("click", () => {
//   let authorName = AName.value;
//   let bookName = BkName.value;
//   let year = Year.value;
//   container2.style.display = "block";
//   if (authorName && bookName && year) {
//     const newBook = AddBook(authorName, bookName, year);

//     renderBooks();

//     // Clear input fields after adding the book
//     AName.value = "";
//     BkName.value = "";
//     Year.value = "";
//   } else {
//     alert("All fields are required.");
//   }
// });
// // console.log(books);
// // ******************************
// // ***************************

// // //Edit **********//
// let UserChoice = null; // Declare globally
// const container3 = document.querySelector(".container3");
// // Event listener for updating the global UserChoice when a radio button is clicked
// container3.addEventListener("click", (e) => {
//   const clickedElement = e.target;
//   if (clickedElement.tagName === "INPUT" && clickedElement.type === "radio") {
//     UserChoice = clickedElement.value; // Update the global variable on radio button click
//     console.log("UserChoice updated to:", UserChoice);

//     // Call the function where the conditional logic is executed
//     handleUserChoice();
//   }
// });

// function handleUserChoice() {
//   return UserChoice;
// }

// // //
// const Bname = document.querySelector(".Bname");
// const Changeval = document.querySelector(".Changeval");
// const val = document.querySelector(".val");

// function handleUserEdit(NameType, Value) {
//   const userchoice = handleUserChoice();

//   // Create a copy of books to avoid mutating the original array directly
//   const UpdateBooks = [...books];

//   // Find the index of the book by its name
//   const index = UpdateBooks.findIndex((book) => book.BookName === NameType);

//   if (index !== -1) {
//     if (userchoice === "AuthorName") {
//       UpdateBooks[index].AuthorName = Value;
//       console.log("Updated Author Name");
//     } else if (userchoice === "BookName") {
//       UpdateBooks[index].BookName = Value;
//       console.log("Updated Book Name");
//     } else if (userchoice === "Year") {
//       UpdateBooks[index].BookYear = Value;
//       console.log("Updated Year Published");
//     } else {
//       console.log("No valid choice selected");
//     }

//     // Update the books in localStorage
//     books = UpdateBooks;
//     localStorage.setItem("books", JSON.stringify(books));

//     // Re-render the updated book list
//     renderBooks();
//   } else {
//     console.log("Book not found for editing.");
//   }
// }

// const btnEdit = document.querySelector(".btnB");
// btnEdit.addEventListener("click", () => {
//   const NameType = Bname.value;
//   const Value = val.value; // Get the value from the input
//   handleUserEdit(NameType, Value);
// });
