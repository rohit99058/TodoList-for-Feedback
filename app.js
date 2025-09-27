let addBtn = document.getElementById("addBtn")
let taskTitle = document.getElementById("title")
let taskDesc = document.getElementById("desc")
let todoContainer = document.getElementById("todoContainer")



addBtn.addEventListener("click", () => {

    if (taskTitle.value == "" || taskDesc.value == "") {

   Toastify({
  text: "⚠️ Please Enter The Feedback!",
  duration: 4000,
//   close: true,
  gravity: "top",       // top or bottom
  position: "left",    // right side of viewport
  stopOnFocus: true,
  style: {
    background: "linear-gradient(135deg, #ff6a00, #ee0979)", // React-like gradient
    borderRadius: "6px",
    padding: "12px 18px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
    maxWidth: "320px",
    width: "auto",
  },
  offset: {
    x: 12, // 12px from right
    y: 12  // 12px from top
  }
}).showToast();



        return
    }

    let task = document.createElement("div")
    task.classList.add("border", "p-3", "myColor", "d-flex", "justify-content-between", "align-items-center", "rounded-4", "mt-3")

    let leftDiv = document.createElement("div")
    let rightDiv = document.createElement("div")

    let theading = document.createElement("h3")
    theading.innerText = taskTitle.value

    let tdesc = document.createElement("p")
    tdesc.innerText = taskDesc.value

    leftDiv.appendChild(theading)
    leftDiv.appendChild(tdesc)

    task.appendChild(leftDiv)

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.classList.add("btn", "btn-danger")

    delBtn.addEventListener("click", () => {
        todoContainer.removeChild(task)
    })


    rightDiv.appendChild(delBtn)

    task.appendChild(rightDiv)

    todoContainer.appendChild(task)

    taskDesc.value = ""
    taskTitle.value = ""

})