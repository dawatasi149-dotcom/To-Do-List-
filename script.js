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
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "*";
        li.appendChild(span);
    }
    info.value = "";
}