const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const tasks = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userData = input.value;

  if (userData === '') {
    alert("Please enter data before submitting it");
    return;
  }

  const task = document.createElement("div");
  task.classList.add('task');
  task.classList.add('mt-5');

  const content = document.createElement('div');
  content.classList.add("content");

  const taskInput = document.createElement('input');
  taskInput.classList.add("text");
  taskInput.classList.add("form-control");

  taskInput.value = userData;
  taskInput.setAttribute('readonly', 'readonly');
  taskInput.type = 'text';

  content.appendChild(taskInput);
  task.appendChild(content);
  tasks.appendChild(task);

  /*action*/


  const action = document.createElement('div')
  action.classList.add("action");

  const taskedit = document.createElement("button");
  taskedit.classList.add("edit");
  taskedit.classList.add("btn");
  taskedit.classList.add("btn-warning");
  taskedit.innerHTML = 'edit';


  const taskdel = document.createElement('button');
  taskdel.classList.add("delete");
  taskdel.classList.add('btn');
  taskdel.classList.add('mx-5')
  taskdel.classList.add('mt-2')
  taskdel.classList.add('btn-danger');
  taskdel.innerHTML = 'delete';


  action.appendChild(taskedit);
  action.appendChild(taskdel);
  task.appendChild(action);


  input.value = "";

  /*edit part*/


  taskedit.addEventListener('click', () => {

    if (taskedit.innerHTML == 'Edit') {
      taskInput.removeAttribute("readonly");
      taskedit.innerHTML = "save";
      taskInput.focus();
    }
    else {
      taskInput.setAttribute('readonly', 'readonly');
      taskedit.innerHTML = "Edit";
    }

    /*deletpart*/
    taskdel.addEventListener('click', () => {

      tasks.removeChild(task)
    })

  })
});

