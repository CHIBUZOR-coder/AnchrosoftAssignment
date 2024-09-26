// const prompt = require("prompt-sync")();
const StudentList = [];
class StudentsProfile {
  constructor(FirstName, Surname, age, State) {
    this.FirstName = FirstName;
    this.Surname = Surname;
    this.age = age;
    this.State = State;
  }
  Change = (Item, value) => {
    if (this.hasOwnProperty(Item)) {
      this[Item] = value; // Use bracket notation to dynamically access properties
    } else {
      console.log(`Property "${Item}" does not exist.`);
    }
  };
}

const AddStudent = (Class, ListArray, FirstName, Surname, age, State) => {
  const NewStudent = new Class(FirstName, Surname, age, State);
  ListArray.push(NewStudent);
  return NewStudent
};

let Chisco = AddStudent(StudentsProfile, StudentList, "Chisco", "Abanna", 22, "Imo State");
let Isreal =  AddStudent(StudentsProfile, StudentList, "Isreal", "Macauley", 20, "Osun State");
let Chuka = AddStudent(StudentsProfile, StudentList, "Chuka", "Chukwuka", 19, "Abia State");
let Michael = AddStudent(StudentsProfile, StudentList, "Michael", "Abioye", 19, "Lagos State");
console.log(StudentList);
console.log(Michael);


function EditProfile(student, Item, value){
student.Change(Item, value);
}

EditProfile(Michael, "FirstName", "FineBoy");











