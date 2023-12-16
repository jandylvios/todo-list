const todoList = [];



function addList(){
    const toDoinput = document.querySelector('.js-toDo3');
    const toDoinputDate = document.querySelector('.js-toDo-input-date'); 
    const todoName = toDoinput.value;
    const todoDate = toDoinputDate.value;

    if(todoName == '' || todoDate == '')
        return;

    todoList.push([todoName, todoDate]);
    
    displayTodo();

    toDoinput.value = toDoinputDate.value = '';
}
function displayTodo() {
    
    let i;
    
    document.querySelector('.todo-list2')
            .innerHTML = '';
    
    for(i = 0; i < todoList.length; i++) {  //using loop to display the list line by line
        document.querySelector('.todo-list2')
            .innerHTML += `
                <div class="todo-row">
                    <div class="todo-name js-todo-name">
                        <p class="todo-name-display">
                            ${todoList[i][0]}
                        </p>
                    </div>

                    <div class="todo-date js-todo-date">
                        <p class="todo-date-display">
                            ${todoList[i][1]}
                        </p>
                    </div>
                    
                    <button class="todo-delete" id="${i}"
                        onclick="
                            todoDelete(this.id);
                       ">Delete</button>
                </div>`;
                
    }
    
    
    console.log(todoList);

}

function todoDelete(i) {
    todoList.splice(i, 1);
    displayTodo();
}