// const prompt = require("prompt-sync")();
const CustomerList = [];
const RoomList = [];

class Customers {
  constructor(Name, phoneNum, days, pricepay, Room) {
    this.Name = Name;
    this.phoneNum = phoneNum;
    this.days = days;
    this.pricepay = pricepay;
    this.Room = Room;
  }
}

const BookCustomer = (Class, Name, phoneNum, days, pricepay, Room) => {
  const NewCustomer = new Class(Name, phoneNum, days, pricepay, Room);
  CustomerList.push(NewCustomer);
  return NewCustomer;
};
console.log(CustomerList);

class Rooms {
  constructor(Name, price, status) {
    this.Name = Name;
    this.price = price;
    this.status = status;
  }
}

const AddRoom = (Class, Name, price, status) => {
  const NewRoom = new Class(Name, price, status);
  RoomList.push(NewRoom);
  return NewRoom;
};

const Room1 = AddRoom(Rooms, "Room1", 300, "Empty");
const Room2 = AddRoom(Rooms, "Room2", 600, "Empty");
const Room3 = AddRoom(Rooms, "Room3", 500, "Empty");
const Room4 = AddRoom(Rooms, "Room4", 800, "Empty");
console.log(RoomList);

const changeRoomStatus = (roomName) => {
  // Find the room object in the RoomList by comparing the room names
  const room = RoomList.find((room) => room.Name === roomName);

  // Check if the room exists
  if (room) {
    // Update the room status to "Booked"
    if (room.status === "Empty") {
      room.status = "Booked";
    } else if (room.status === "Booked") {
      room.status = "Empty";
    }

    console.log("Changed Room Status successfully:", roomName);
  } else {
    console.log("Could not find Room");
  }

  return room.status;
};

//rooms
const rooms = document.querySelector(".rooms");
RoomList.forEach((room) => {
  const divcon = document.createElement("div");
  divcon.setAttribute("class", "divcon");
  const divcon2 = document.createElement("div");
  divcon2.setAttribute("class", "divcon2");
  const divcon3 = document.createElement("div");
  divcon3.setAttribute("class", "divcon3");
  const roomDetails = document.createElement("roomDetails");
  roomDetails.setAttribute("class", "roomDetails");
  //////content of divcon below

  //price
  const price = document.createElement("p");
  price.setAttribute("class", "price");
  price.innerText = ` price: $${room.price}`;

  //Name
  const Name = document.createElement("h2");
  Name.setAttribute("class", "Name");
  Name.innerText = ` ${room.Name}`;

  //status
  const status = document.createElement("p");
  status.setAttribute("class", "status");
  status.innerText = ` Status: ${room.status}`;

  //Appending contents of divcon2
  divcon2.appendChild(Name);

  const head = document.createElement("h3");
  head.innerText = `Book a room`;
  const dayInputCon = document.createElement("div");
  const dayInput = document.createElement("input");
  dayInput.type = "number";
  dayInputCon.appendChild(dayInput);
  dayInput.setAttribute("placeholder", "Days");
  const nameInputCon = document.createElement("div");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "Enter Name");
  nameInputCon.appendChild(nameInput);

  const numInputCon = document.createElement("div");
  const numInput = document.createElement("input");
  numInput.setAttribute("placeholder", "Enter phone number");
  numInputCon.appendChild(numInput);

  //Appending inputs to divcon3
  divcon3.appendChild(head);
  divcon3.appendChild(nameInputCon);
  divcon3.appendChild(numInputCon);
  divcon3.appendChild(dayInputCon);

  //Appending room price and status to roomDetails
  roomDetails.appendChild(price);
  roomDetails.appendChild(status);

  //creating book button
  const bookbtnCon = document.createElement("div");
  bookbtnCon.setAttribute("class", "bookbtnCon");
  const bookbtn = document.createElement("span");
  bookbtn.setAttribute("class", "bookbtn");
  bookbtn.innerText = `Book`;
  bookbtnCon.appendChild(bookbtn);

  //Appending contents of divcon
  divcon.appendChild(roomDetails);
  divcon.appendChild(divcon2);
  divcon.appendChild(divcon3);
  divcon.appendChild(bookbtnCon);

  //appending divcon to the html room div
  rooms.appendChild(divcon);

  //when room is booked
  bookbtn.addEventListener("click", () => {
    bookbtn.style.backgroundColor = `rgb(45, 87, 87)`;
    let Name = nameInput.value;
    let phoneNum = numInput.value;
    let days = dayInput.value;
    let pricePay = room.price * days;
    let Room = room.Name;
    const NewCustomer = BookCustomer(
      Customers,
      Name,
      phoneNum,
      days,
      pricePay,
      Room
    );

    nameInput.value = "";
    numInput.value = "";
    dayInput.value = "";
    bookbtn.style.backgroundColor = `aqua`;
    //Remove price showcsae since room is already booked
    price.style.display = `none`;
    divcon.removeChild(divcon3);
    const NewRoomStatus = changeRoomStatus(Room);
    status.innerText = `Status ${NewRoomStatus}`;

    //Create checkout
    const checkoutCon = document.createElement("div");
    checkoutCon.setAttribute("class", "checkoutCon");
    const checkout = document.createElement("span");
    checkout.innerText = `Checkout`;
    checkout.setAttribute("class", "checkout");
    checkoutCon.appendChild(checkout);

    //CustomerDetails
    const customerDetails = document.createElement("div");
    customerDetails.setAttribute("class", "details");
    const userName = document.createElement("p");
    userName.innerText = `Name: ${NewCustomer.Name}`;
    const userNum = document.createElement("p");
    userNum.innerText = `Phone Num: ${NewCustomer.phoneNum}`;
    const Paidprice = document.createElement("p");
    Paidprice.innerText = `Paid price: $${NewCustomer.pricepay}`;
    const RoomChoice = document.createElement("p");
    RoomChoice.innerText = `Room: ${NewCustomer.Room}`;
    customerDetails.appendChild(userName);
    customerDetails.appendChild(userNum);
    customerDetails.appendChild(Paidprice);
    customerDetails.appendChild(RoomChoice);

    //Show Viewuser button
    const viewCon = document.createElement("div");
    viewCon.style.visibility = `visible`;
    viewCon.setAttribute("class", "viewCon");
    const viewbtn = document.createElement("span");
    viewbtn.innerText = `Customer Details`;
    viewbtn.setAttribute("class", "viewbtn");
    viewCon.appendChild(viewbtn);

    //final addons to divcon
    divcon.appendChild(viewCon);

    //Viewuser event listener to show  user details
    viewbtn.addEventListener("click", () => {
      //detials will be in here
      viewCon.appendChild(customerDetails);
      //Hide the details button
      const HideCon = document.createElement("div");
      HideCon.setAttribute("class", "HideCon");
      const Hide = document.createElement("span");
      Hide.setAttribute("class", "Hide");
      Hide.innerText = `Hide`;
      viewCon.appendChild(Hide);
      Hide.addEventListener("click", () => {
        viewCon.removeChild(customerDetails);
        viewCon.removeChild(Hide);
        viewCon.appendChild(viewbtn);
      });
      viewCon.removeChild(viewbtn);
    });
    divcon.appendChild(checkoutCon);
    divcon.removeChild(bookbtnCon);

    ////Checkout Functionality Removed customer from CustomerlistArray****************
    checkout.addEventListener("click", (customerName) => {
      price.style.display = `block`;
      divcon.appendChild(divcon3);
      divcon.appendChild(bookbtnCon);
      // viewCon.style.visibility = `hidden`;
      divcon.removeChild(viewCon);
      customerName = NewCustomer.Name;
      const customerIndex = CustomerList.findIndex(
        (customer) => customer.Name === customerName
      );
      if (customerIndex !== -1) {
        CustomerList.splice(customerIndex, 1);
        console.log("Cheked out successfully,", customerIndex);
      } else {
        console.log("Could not find customer");
      }

      const DefaultStatus = changeRoomStatus(Room);
      // roomDetails.appendChild(price);
      status.innerText = `Status: ${DefaultStatus}`;
      divcon.removeChild(checkoutCon);
    });

    // console.log(DefaultStatus);
  });
  // Adding Event LISTener to the Book button
});
