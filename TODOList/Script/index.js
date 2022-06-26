

document.querySelector("#form").addEventListener("submit", myFun);
// var todoList;

// // if(null) [] else JSON.parse(localStorage.getItem("todoData"))

// if (localStorage.getItem("todoData") == null) {
//   todoList = [];
// } else {
//   todoArr = JSON.parse(localStorage.getItem("todoData"));
// }

var todoList = JSON.parse(localStorage.getItem("todoData"))||[]

function myFun() {
  event.preventDefault();
  let employee = document.querySelector("#employee").value;
  let name = document.querySelector("#name").value;
  let quantity = document.querySelector("#qty").value;
  let prio = document.querySelector("#priority").value;

  let todoObj = {
    itemEmployee: employee,
    itemName: name,
    itemQty: quantity,
    itemPrio: prio,
  };
  // console.log(todoObj);
  todoList.push(todoObj);
  console.log(todoList);
  window.location.reload();

  localStorage.setItem("todoData", JSON.stringify(todoList));
}

console.log(localStorage.getItem("todoData") || [])