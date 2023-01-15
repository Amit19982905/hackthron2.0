let item;
let txt;
let ListItem = `<div class="contant"></div>
                    <i  class=" fa fa-check-square" style="font-size:110%;color:green"></i>
                    <button class=" edit" value="2">EDIT</button>
                    <i  class=" fa fa-close"  style="font-size:110%;color:red"></i>`;
function addinglist() {
    let txt = document.getElementById("list-item").value;
    if (txt == "") {
        alert("please enter somthing");
    }
    else {
        const node = document.createElement("div");
        node.classList.add("item");
        document.getElementById("box").appendChild(node).innerHTML = ListItem;
        const conte = document.getElementsByClassName("contant");
        conte[conte.length - 1].innerHTML = txt;
    }
    document.getElementById("list-item").value = "";
}
let btn = document.querySelector('#box');
btn.addEventListener('click', function (e) {
    if (e.target.classList.contains("fa-close")) {
        let item = e.target.parentElement;
        item.remove();
    }
    else if (e.target.classList.contains("fa-check-square")) {
        let item = e.target.parentElement.childNodes;
        if (item[0].classList.contains("done")) {
            item[0].classList.remove("done");
        }
        else {
            item[0].classList.add("done");
        }
    }
    else if (e.target.classList.contains("edit")) {
        item = e.target.parentElement.childNodes;
        document.getElementById("editbox").style.display = "block";
        txt = item[0].innerText;
        document.getElementById("edit-txt").value = txt;
    }
})

function edit() {
    txt = "";
    txt = document.getElementById("edit-txt").value;
    item[0].innerText = txt;
    cancle();
}

function cancle() {
    document.getElementById("editbox").style.display = "none";
}