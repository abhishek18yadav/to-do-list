/**keywords used here are
 * inputtdl - textdata
 * 
 * 
 *  */ 
let par;
let uniqueIdCounter =0; // for different list container for deleting or marking
let inputtdl;
let listContainerTextAreaForDoneElement;
const buttontdl = document.getElementById('buttonInput');

function createUniqueEle(){
    uniqueIdCounter = uniqueIdCounter+1;
    return uniqueIdCounter;
}

// doneBtnData.addEventListener('click',(event)=>{
//     event.preventDefault();
//     console.log("hlo");
// })
// function doneBtnFunction(){
//     onclick=(event)=>{
//         const target = event.target;
//         const parentOfTarget = target.parentNode;
//         const targetDiv = (parentOfTarget.parentNode);
//        const parentOfTargetDiv = document.getElementById("todoList-section")
//         console.log('who oskspks',parentOfTargetDiv,'chilsd',targetDiv);
//         parentOfTargetDiv.replaceChild(newlyReplacedTodoElement(targetDiv), targetDiv);
//     };
// };
function deleteBtnFunction(){
    onclick=(event)=>{
        const target = event.target;
        const parentOfTarget = target.parentNode;
        const targetDiv = (parentOfTarget.parentNode);
        const parentOfTargetDiv = document.getElementById("todoList-section")
        console.log('who oskspks',parentOfTargetDiv,'chilsd',targetDiv);
        parentOfTargetDiv.removeChild(targetDiv);
    };
}

buttontdl.addEventListener('click',(event)=>{
    event.preventDefault();
    inputtdl= document.getElementById('bodyContainerTextArea');

    addTodo(inputtdl);
    console.log(buttontdl.innerHTML);
});


function addTodo(inputtdl){
    if(inputtdl.value === ''){
        alert('please drop todo');
        return;
    }
    const todo = {
        text : inputtdl.value,
        id: Date.now()
    };
    createTodoElement(todo);

    inputtdl.value='';
};

function createTodoElement(todo){
    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');
    listContainer.id='listContainer'+createUniqueEle();

    const div_textareaVar = document.createElement('div');
    div_textareaVar.classList.add('listContainerTextArea')
    const textareaVar = document.createElement('textarea');
    textareaVar.setAttribute('name','text');
    textareaVar.setAttribute('id','listContainerTextArea');
    textareaVar.innerText = todo.text;

    // const div_doneButtonVar = document.createElement('div');
    // div_doneButtonVar.classList.add('done')
    // const doneButtonVar = document.createElement('button');
    // doneButtonVar.innerText='done';
    // doneButtonVar.setAttribute('type', 'submit');
    // doneButtonVar.setAttribute('id', 'done');
    // doneButtonVar.setAttribute('onClick','doneBtnFunction()');

    const div_deleteButtonVar = document.createElement('div');
    div_deleteButtonVar.classList.add('delete')
    const deleteButtonVar = document.createElement('button');
    deleteButtonVar.innerText='delete'
    deleteButtonVar.setAttribute('type', 'submit');
    deleteButtonVar.setAttribute('id', 'delete');
    deleteButtonVar.setAttribute('onClick','deleteBtnFunction()')

    div_textareaVar.appendChild(textareaVar);
    // div_doneButtonVar.appendChild(doneButtonVar);
    div_deleteButtonVar.appendChild(deleteButtonVar);

    listContainer.appendChild(div_textareaVar);
    // listContainer.appendChild(div_doneButtonVar);
    listContainer.appendChild(div_deleteButtonVar);
    

    const responsibleSection= document.getElementById('todoList-section')
    responsibleSection.appendChild(listContainer);

}
function newlyReplacedTodoElement(targetDiv){
    const replacedListContainer = document.createElement('div');
    replacedListContainer.classList.add("listContainer");

    const div_textareaVar = document.createElement('div');
    div_textareaVar.classList.add('replaced_listContainerTextArea')
    const textareaVar = document.createElement('textarea');
    textareaVar.setAttribute('name','text');
    textareaVar.setAttribute('id','listContainerTextArea');
    textareaVar.innerText = 'TASK COMPLETED';

    // const div_doneButtonVar = document.createElement('div');
    // div_doneButtonVar.classList.add('done')
    // const doneButtonVar = document.createElement('button');
    // doneButtonVar.innerText='done';
    // doneButtonVar.setAttribute('type', 'submit');
    // doneButtonVar.setAttribute('id', 'done');

    const div_deleteButtonVar = document.createElement('div');
    div_deleteButtonVar.classList.add('delete')
    const deleteButtonVar = document.createElement('button');
    deleteButtonVar.innerText='delete'
    deleteButtonVar.setAttribute('type', 'submit');
    deleteButtonVar.setAttribute('id', 'delete');

    div_textareaVar.appendChild(textareaVar);
    // div_doneButtonVar.appendChild(doneButtonVar);
    div_deleteButtonVar.appendChild(deleteButtonVar);

    replacedListContainer.appendChild(div_textareaVar);
    // replacedListContainer.appendChild(div_doneButtonVar);
    replacedListContainer.appendChild(div_deleteButtonVar);
    
    return replacedListContainer;
    // const responsibleSection= document.getElementById('todoList-section')
    // responsibleSection.appendChild(replacedListContainer);
}
// <!-- <div class="listContainer">
//             <div class="listContainerTextArea">
//                 <textarea name="text" id="listContainerTextArea"></textarea>
//             </div>
//             <div class="done">
//                 <button type="submit" id="done">Done</button>
//             </div>
//             <div class="delete">
//                 <button type="submit" id="delete">delete</button>
//             </div>
//         </div> 
function markingTheCompletedTodo(){

}