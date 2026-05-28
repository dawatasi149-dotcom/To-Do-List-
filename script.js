let button = document.getElementById('button');
let list = document.getElementById('list');
button.onclick = () => {
    let val = document.getElementById('data').value;
    console.log(val);
    list.innerHTML = val;
}