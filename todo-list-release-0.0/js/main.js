// For task name validation
let taskName = document.getElementById("taskName"); //to get the task name
let taskDesc=document.getElementById("taskDesc"); //to get the task description
let taskDate=document.getElementById("taskDate"); //to get the task date
let taskNameError = document.getElementById("taskNameError"); //task name error div
let taskDescError=document.getElementById("taskDescError"); //task name error div
let taskDateError=document.getElementById("taskDateError"); //task name error div
let p = document.createElement("p"); //to create the paragraph element
let pDesc=document.createElement("p"); //to create the description paragraph element
let pDate=document.createElement("p"); //to create the date paragraph element
let taskNameInputError = false; // for toggle the error display
let taskDescInputError = false; // for toggle  description the error display
let taskDateInputError = false; // for toggle date the error display



function addTask() {
  // let taskname=taskName.value;

  // let taskElement = document.createElement('div');
  // taskElement.classList.add("task");
  // taskElement.innerHTML = `
  //   <div class="task-name-and-edit">
  //     <div class="task-name">
  //       <h1>${taskname}</h1>
  //     </div>`
  //     // Append the new task to the task list
  // var taskList = document.querySelector(".task-list");
  // taskList.appendChild(taskElement);

  // // Clear the input fields
  // document.getElementById("taskName").value = "";


  let taskname=taskName.value
  // let taskElement =document.createElement('h1')
  // taskElement.classList.add("task");
  // taskElement.innerHTML=` <div class="task-name">
  //        <h1>${taskname}</h1>
  //     </div>`;
  //     let taskList=document.querySelector('.task-list');
  //     taskList.appendChild(taskElement);

  //     //clear the input field
  //     taskName.value="";
  // let taskElement = document.createElement('div');
  // taskElement.classList.add("task-name");
  // taskElement.innerHTML = `<h1>${taskname}</h1>`;

  // // Append the new task element to the task list
  // let taskList = document.querySelector('.task-list');
  // taskList.appendChild(taskElement);

  // // Clear the input field for task name only
  // taskName.value = "";
  
    // Get the value from the input field for task name
    
    
  
    
  }
  















  if (taskName.value == "" ) {
    
    taskNameInputError = true;
    taskName.classList.add("input-error");
    taskNameError.append(p);
    p.textContent="Please enter task name.";
    p.classList.add("error-font");
  }
  
  if (taskDesc.value == "") {
    taskDescInputError = true;
    taskDesc.classList.add("input-error-desc");
    taskDescError.append(pDesc);
    pDesc.textContent = "Please enter task description.";
    pDesc.classList.add("error-font-desc");
  }
  if(taskDate.value == ""){
    console.log(taskDate.value);
    taskDateInputError=true;
    taskDate.classList.add("input-error")
    taskDateError.append(pDate);
    pDate.textContent="Please enter task date";
    pDate.classList.add("error-font");
  }
  


addEventListener("input", (event) => {
  if (taskNameInputError) {
    taskName.classList.remove("input-error");
    taskNameError.remove(p);
    taskNameInputError = false;
  }
  if (taskDescInputError) {
    taskDesc.classList.remove("input-error-desc");
    taskDescError.removeChild(pDesc);
    taskDescInputError = false;
  }
});
