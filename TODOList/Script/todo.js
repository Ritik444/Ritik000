

let todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);

let completed = JSON.parse(localStorage.getItem("completedTodo")) || []


todoItems.map(function (elem,index) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = elem.itemEmployee;

  let td2 = document.createElement("td");
  td2.innerText = elem.itemName;

  let td3 = document.createElement("td");
  td3.innerText = elem.itemQty;

  let td4 = document.createElement("td");
  td4.innerText = elem.itemPrio;

  let td5 = document.createElement("td");
  td5.textContent = " Completed";
  td5.style.color = "red";
  td5.style.cursor = "pointer"
  
  td5.addEventListener("click", function () {
    markCompleteFunction(elem,index);
  });
  tr.append(td1,td2, td3, td4, td5);

  document.querySelector("#body").append(tr);
});

function markCompleteFunction(elem,index) {
    // console.log(elem)
     completed.push(elem);
    //  console.log(completed)
      localStorage.setItem("completedTodo", JSON.stringify(completed));
}