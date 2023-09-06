document.getElementById("subTaskBTN").addEventListener("click", addSubTask);
document.getElementById("mainTaskBTN").addEventListener("click", addTask);

function addSubTask() {
    console.log("clicked");
    var parent_node = document.createElement("div");
    parent_node.classList.add("addItems");
    var node1 = document.createElement("input");
    var node2 = document.createElement("button");
    node1.type = "text";
    node1.classList.add("new_item");
    node1.classList.add("subtask");
    node1.setAttribute("placeholder", "Sub-task");
    node2.classList.add("delete");
    node2.addEventListener("click", deleted);
    node2.innerHTML = "X";
    document.getElementById("addSubTasks").appendChild(parent_node);
    parent_node.appendChild(node1);
    parent_node.appendChild(node2);
}

function deleted(event) {
    console.log(event.target.parentElement.classList[0]);
    console.log(document.getElementsByClassName("subtask_div"));
    if (event.target.parentElement.classList[0] == 'subtask_div' && document.getElementsByClassName("subtask_div").length == 1) {
        console.log(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove();
    }
    else {
        event.target.parentElement.remove();
    }
}

function addTask() {
    var main_task = document.getElementById("task").value;
    var sub_tasks = document.getElementsByClassName("subtask");
    var parent_node = document.createElement("div");
    parent_node.classList.add("item_div");
    parent_node.classList.add("task_div");
    var node1 = document.createElement("p");
    node1.innerHTML = main_task;
    node1.classList.add("mainTaskHeading");
    if (main_task.length != 0 && document.getElementsByClassName("subtask").length && document.getElementsByClassName("subtask")[0].value.length) {
        document.getElementById("tasklist").appendChild(parent_node);
        parent_node.appendChild(node1);
        console.log(sub_tasks.length);
        for (var i = 0; i < sub_tasks.length; i++) {
            if (sub_tasks[i].value.length != 0) {
                var node2 = document.createElement("div");
                node2.classList.add("subtask_div");
                var node_i1 = document.createElement("input");
                var node_i2 = document.createElement("span");
                var node_i3 = document.createElement("button");
                node_i1.type = "checkbox";
                node_i1.classList.add("checkbox");
                node_i1.addEventListener("click", checked);
                node_i2.classList.add("item");
                node_i2.innerHTML = sub_tasks[i].value;
                node_i3.innerHTML = "X";
                node_i3.classList.add("delete");
                node_i3.addEventListener("click", deleted);

                parent_node.appendChild(node2);
                node2.appendChild(node_i1);
                node2.appendChild(node_i2);
                node2.appendChild(node_i3);
            }
        }
        document.getElementById("task").value = "";
        var parent = document.getElementById("addSubTasks");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    else {
        if (main_task.length == 0) {
            window.alert("Enter the main task heading!");
        }
        else if (document.getElementsByClassName("subtask").length == 0) {
            window.alert("No Sub-tasks! Add task in Today tab!");
        }
        else if (document.getElementsByClassName("subtask")[0].value.length == 0) {
            window.alert("Enter the sub-task!");
        }
    }

}

function checked(event) {
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