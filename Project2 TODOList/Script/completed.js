
let completed = JSON.parse(localStorage.getItem("completedTodo")) || []


completed.map(function (elem) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = elem.itemName;
        let td2 = document.createElement("td");
        td2.innerText = elem.itemQty;

        let td3 = document.createElement("td");
        td3.innerText = elem.itemPrio;

        tr.append(td1, td2, td3);

        document.querySelector("#body").append(tr);
    })

    