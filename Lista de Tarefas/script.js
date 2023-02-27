const addBtn = document.getElementById('addBtn');
const listContainer = document.querySelector('.list-container');
const taskInput = document.getElementById('task');

addBtn.addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('task-item')

    let text = document.createElement('p');
    text.innerText = taskInput.value;
    taskInput.value = ''
    div.appendChild(text);

    let check = document.createElement('button');
    check.setAttribute('id', 'btnEdit');
    check.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    div.appendChild(check);

    let trash = document.createElement('button');
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trash.setAttribute('id', 'btnDelete');
    div.appendChild(trash);

    listContainer.appendChild(div);

    check.addEventListener('click', function(){
        if(!text.classList.contains('done')) {
            text.style.textDecoration = 'line-through'
            text.classList.add('done')
        } else {
            text.style.textDecoration = 'none'
            text.classList.remove('done')
        }
    })

    trash.addEventListener('click', function(e){
        console.log(e.currentTarget.parentElement)
        e.currentTarget.parentElement.remove();
    })
})
