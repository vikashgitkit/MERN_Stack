let todoList = [];
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
     let todoItem = inputElement.value;
     console.log(todoItem);
     todoList.push(todoItem);
     inputElement.value = '';
     
}

function displayItems(){
    let displayEle = document.querySelector('#todo-items');
    for(let i = 0; i < todoList.length; i++){
        displayEle.innerText = displayEle.innerText + todoList[i];
    }
}