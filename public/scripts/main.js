document.getElementById("add_btn").addEventListener("click",add_new_item);
document.getElementById("new_item").addEventListener("keypress",(event)=>{
    if (event.key=="Enter") {
        event.preventDefault();
        document.getElementById("add_btn").click();
    }
});

function add_new_item()
{ 
    console.log("Clicked!");
    var parent_node = document.createElement("div");
    parent_node.classList.add("item_div");
    var node1 = document.createElement("input");
    var node2 = document.createElement("span");
    var node3 = document.createElement("button");
    node1.type = "checkbox";
    node1.classList.add("checkbox");
    node1.addEventListener("click",checked);
    node2.classList.add("item");
    node3.innerHTML = "X";
    node3.classList.add("delete");
    node3.addEventListener("click",deleted);
    var item = document.getElementById("new_item").value;
    if (item.length != 0) {
        console.log(item);
        node2.innerHTML = item;
        document.getElementById("todolist").appendChild(parent_node);
        parent_node.appendChild(node1);
        parent_node.appendChild(node2);
        parent_node.appendChild(node3);
        document.getElementById("new_item").value = "";
    }
    else {
        window.alert("Type in the task to be added!");
    }
}



function checked(event)
{
    var parent = event.target.parentElement;
    var item = (parent.childNodes)[1];
    console.log(item);
    if (event.target.checked) {
        item.style.textDecoration = "line-through";
    }
    else {
        item.style.textDecoration = "none";
    }
    
}

function deleted (event) {
    var parent = event.target.parentElement;
    parent.remove();
}