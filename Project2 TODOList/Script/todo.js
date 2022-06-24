

let todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);

let completed = JSON.parse(localStorage.getItem("completedTodo")) || []


todoItems.map(function (elem,index) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = elem.itemName;
  let td2 = document.createElement("td");
  td2.innerText = elem.itemQty;

  let td3 = document.createElement("td");
  td3.innerText = elem.itemPrio;

  let td4 = document.createElement("td");
  td4.textContent = " Completed";
  td4.style.color = "red";
  td4.style.cursor = "pointer"
  td4.addEventListener("click", function () {
    markCompleteFunction(elem,index);
  });
  tr.append(td1, td2, td3, td4);

  document.querySelector("#body").append(tr);
});

function markCompleteFunction(elem,index) {
    // console.log(elem)
     completed.push(elem);
    //  console.log(completed)
      localStorage.setItem("completedTodo", JSON.stringify(completed));
}