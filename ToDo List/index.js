var addBtn = document.getElementById("addButton");
var todoInp = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");

document.getElementById("addButton").addEventListener("click",add);

function add(){
    var task = todoInp.value;
    if(task!=""){
        var li = document.createElement("li");
        var span = document.createElement("span");

        span.innerText = task;

        var delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.className = "del";

        li.appendChild(span);
        li.appendChild(delBtn);
        todoList.appendChild(li);

        delBtn.addEventListener("click",function(){
            todoList.removeChild(li);
        })


         todoInp.value="";



    }
}