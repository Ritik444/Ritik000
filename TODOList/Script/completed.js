
let complete = JSON.parse(localStorage.getItem("completedTodo")) || []


complete.map((elem) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = elem.itemEmployee;

    let td2 = document.createElement("td");
    td2.innerText = elem.itemName;

    let td3 = document.createElement("td");
    td3.innerText = elem.itemQty;

    let td4 = document.createElement("td");
    td4.innerText = elem.itemPrio;

    tr.append(td1,td2, td3, td4);

    document.querySelector("#body").append(tr);
})

