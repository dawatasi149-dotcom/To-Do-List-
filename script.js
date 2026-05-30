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
});
