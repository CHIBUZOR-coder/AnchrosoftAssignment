// const prompt = require("prompt-sync")();
// const books = ["Fear Women", "Think Like A Man", "Life Is Good", "GOD Is Good"];
// ******************
const BookShelve = [];
class Books {
  constructor(Name, price) {
    this.Name = Name;
    this.price = price;
  }
}
// *****************
const ShoeShelve = [];
class Shoes {
  constructor(Name, price) {
    this.Name = Name;
    this.price = price;
  }
}
// **********************
const PhoneShelve = [];
class Phones {
  constructor(Name, price) {
    this.Name = Name;
    this.price = price;
  }
}
// ********************
const AddToShelve = (Stock, Shelve, Name, price) => {
  const ItemName = new Stock(Name, price);
  Shelve.push(ItemName);
};
// *******************************
//Adding new Books
AddToShelve(Books, BookShelve, "TrueLove", 1000);
AddToShelve(Books, BookShelve, "Great", 500);
AddToShelve(Books, BookShelve, "Good GOD", 5000);

//Adding new shoes
AddToShelve(Shoes, ShoeShelve, "Puma", 1000);
AddToShelve(Shoes, ShoeShelve, "Nike", 2000);
AddToShelve(Shoes, ShoeShelve, "Addidas", 2200);

//Adding new Phones
AddToShelve(Phones, PhoneShelve, "Android", 3000);
AddToShelve(Phones, PhoneShelve, "Iphone", 700);
AddToShelve(Phones, PhoneShelve, "Ipad", 2500);

console.log(BookShelve);
console.log(ShoeShelve);
console.log(PhoneShelve);
// *********************************************

const cartItems = [];
let BookCount = 0;
let ShoeCount = 0;
let PhoneCount = 0;
let Total = 0;
let Totalprice = 0;
let Item = null;

const tcount = document.querySelector(".tcount");
const tprice = document.querySelector(".tprice");

function TotalCart() {
  Total++;
  tcount.innerText = ` Total count: ${Total}`;
  console.log(`Total Cart ${Total}`);
}

function TotalCartReduce(item) {
  Total--;
  if (item === "book") {
    BookCount--;
    totalBo.innerText = `Total:${BookCount}`;
  } else if (item === "shoe") {
    ShoeCount--;
    totalSo.innerText = `Total:${ShoeCount}`;
  } else {
    PhoneCount--;
    totalPo.innerText = `Total:${PhoneCount}`;
  }

  tcount.innerText = ` Total count: ${Total}`;

  console.log(`Total Cart ${Total}`);
}

function TotalPrice(price) {
  Totalprice += price;
  tprice.innerText = ` Total price: $${Totalprice}`;
  console.log(`Total Price: ${Totalprice}`);
}

function TotalPriceReduce(price) {
  Totalprice -= price;
  tprice.innerText = ` Total price: $${Totalprice}`;
  console.log(`Total Price: ${Totalprice}`);
}

//Books
const books = document.querySelector(".books");
const bookA = document.querySelector(".bookA");
const totalBo = document.querySelector(".totalBo");
BookShelve.map((book) => {
  const container = document.createElement("div");
  container.setAttribute("class", "tush");
  const displayName = document.createElement("p");
  displayName.innerText = `${book.Name}`;
  const displayPrice = document.createElement("p");
  displayPrice.innerText = `$${book.price}`;
  container.appendChild(displayName);
  container.appendChild(displayPrice);
  books.appendChild(container);

  // ***************************
  container.addEventListener("click", (e) => {
    e.preventDefault;
    TotalCart();
    TotalPrice(book.price);
    cartItems.push(book);
    const displayContainer = document.createElement("div");
    const displayName2 = document.createElement("p");
    displayName2.innerText = `${book.Name}`;
    const displayPrice2 = document.createElement("p");
    displayPrice2.innerText = `$${book.price}`;
    displayContainer.appendChild(displayName2);
    displayContainer.appendChild(displayPrice2);
    const button = document.createElement("span");
    button.innerText = "Delete";
    button.setAttribute("class", "delete");
    const li = document.createElement("li");
    BookCount++;
    li.setAttribute("class", "list");
    li.appendChild(displayContainer);
    li.appendChild(button);
    container.classList.remove("tush");
    container.classList.add("tushB");
    bookA.appendChild(li);
    button.addEventListener("click", (e) => {
      Item = "book";
      e.target.closest(".list").style.display = "none";
      TotalPriceReduce(book.price);
      TotalCartReduce(Item);
    });
    totalBo.innerText = `Total:${BookCount}`;
  });
  // ****
});
// *************************************

//Shoes
const shoes = document.querySelector(".shoes");
const ShoeA = document.querySelector(".ShoeA");
const totalSo = document.querySelector(".totalSo");
ShoeShelve.map((shoe) => {
  const container = document.createElement("div");
  container.setAttribute("class", "tush");
  const displayName = document.createElement("p");
  displayName.innerText = `${shoe.Name}`;
  const displayPrice = document.createElement("p");
  displayPrice.innerText = `$${shoe.price}`;

  container.appendChild(displayName);
  container.appendChild(displayPrice);
  shoes.appendChild(container);

  // ***************************
  container.addEventListener("click", () => {
    TotalCart();
    TotalPrice(shoe.price);
    cartItems.push(shoe);
    const displayContainer = document.createElement("div");
    const displayName2 = document.createElement("p");
    displayName2.innerText = `${shoe.Name}`;
    const displayPrice2 = document.createElement("p");
    displayPrice2.innerText = `$${shoe.price}`;
    displayContainer.appendChild(displayName2);
    displayContainer.appendChild(displayPrice2);
    const button = document.createElement("span");
    button.innerText = "Delete";
    button.setAttribute("class", "delete");
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    li.appendChild(displayContainer);
    li.appendChild(button);
    ShoeA.appendChild(li);
    ShoeCount++;
    container.classList.remove("tush");
    container.classList.add("tushB");
    button.addEventListener("click", (e) => {
      Item = "shoe";
      e.target.closest(".list").style.display = "none";
      TotalPriceReduce(shoe.price);
      TotalCartReduce(Item);
    });
    totalSo.innerText = `Total:${ShoeCount}`;
  });
  // ***
});
// ****************************************************

//Phones
const phones = document.querySelector(".phones");
const phoneA = document.querySelector(".phoneA");
const totalPo = document.querySelector(".totalPo");
PhoneShelve.map((phone) => {
  const container = document.createElement("div");
  container.setAttribute("class", "tush");
  const displayName = document.createElement("p");
  displayName.innerText = `${phone.Name}`;
  const displayPrice = document.createElement("p");
  displayPrice.innerText = `$${phone.price}`;
  container.appendChild(displayName);
  container.appendChild(displayPrice);
  phones.appendChild(container);

  // ***************************
  container.addEventListener("click", () => {
    TotalCart();
    TotalPrice(phone.price);
    cartItems.push(phone);
    const displayContainer = document.createElement("div");
    displayContainer.setAttribute("class", "diss");
    const displayName2 = document.createElement("p");
    displayName2.innerText = `${phone.Name}`;
    const displayPrice2 = document.createElement("p");
    displayPrice2.innerText = `$${phone.price}`;
    displayContainer.appendChild(displayName2);
    displayContainer.appendChild(displayPrice2);
    const button = document.createElement("span");
    button.innerText = "Delete";
    button.setAttribute("class", "delete");

    const li = document.createElement("li");
    li.setAttribute("class", "list");

    li.appendChild(displayContainer);
    li.appendChild(button);
    phoneA.appendChild(li);
    PhoneCount++;
    container.classList.remove("tush");
    container.classList.add("tushB");
    button.addEventListener("click", (e) => {
      Item = phone;
      e.target.closest(".list").style.display = "none";
      TotalPriceReduce(phone.price);
      TotalCartReduce(Item);
    });
    totalPo.innerText = `Total:${PhoneCount}`;
  });

  // ***
});

// ****************************************************

// Toggle viaibility
const cartBtn = document.querySelector(".cartBtn");
const cancl = document.querySelector(".cancl");
const cartShow = document.querySelector(".cartShow");
const parentCart = document.querySelector(".parentCart");

cartBtn.addEventListener("click", () => {
  cartShow.classList.toggle("hidden");
});

cancl.addEventListener("click", () => {
  cartShow.classList.toggle("hidden");
});

parentCart.addEventListener("click", (e) => {
  e.stopPropagation();
});

cartShow.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!e.target.closest(".parentCart")) {
    cartShow.classList.toggle("hidden");
  }
});

// console.log(cartItems.length);
