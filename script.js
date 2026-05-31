let button = document.getElementById('button');
let list = document.getElementById('list');
let val = document.getElementById('val');
let info = document.getElementById('data');
button.onclick = () => {
    if (info.value === '') {
        alert("Add your Task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = info.value;
       
        li.innerHTML = ` <span>${info.value}</span><div class="icons">
         <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-pen" id="edit"></i>
        <i class="fa-solid fa-trash" id="delete"></i>
    </div> ` ;
         list.appendChild(li);
       
    }
    info.value = "";
} 
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        e.target.closest("li").remove();
        
    }
    if (e.target.classList.contains("fa-pen")) {
        let li = e.target.closest("li");
        let text = li.querySelector("span");

        let newTask = prompt("Edit task:", text.innerText);

        if (newTask) {
            text.innerText = newTask;
        }
    }
     if (e.target.classList.contains("fa-check")) {
        e.target.closest("li").classList.toggle("completed");
    }
  
    
});

localStorage.setItem("tasks", list.innerHTML);
list.innerHTML = localStorage.getItem("tasks") || "";