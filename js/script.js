{
  let tasks = [];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="toDoList__item">
          <button class="toDoList__button js-toggleDoneButton">
             ${task.done ? "✖" : "✔"}
          </button>
          <span ${task.done ? "style='text-decoration: line-through'" : ""}>
            ${task.content}
          </span>          
           <button class="toDoList__button toDoList__button--remove js-removeButton">
            🗑
          </button>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindListEvents();
  };

  const removeTask = (buttonIndex) => {
    tasks = [...tasks.slice(0, buttonIndex), ...tasks.slice(buttonIndex + 1)];

    render();
  };

  const toggleTaskDone = (buttonIndex) => {
    tasks = [
      ...tasks.slice(0, buttonIndex),
      {
        ...tasks[buttonIndex],
        done: !tasks[buttonIndex].done,
      },
      ...tasks.slice(buttonIndex + 1),
    ];

    render();
  };

  const addNewTask = (newTaskContent) => {
    tasks = [...tasks.slice(0), { content: newTaskContent }];

    render();
  };

  const bindListEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-toggleDoneButton");

    toggleDoneButtons.forEach((toggleDoneButton, buttonIndex) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(buttonIndex);
      });
    });

    const removeTaskButtons = document.querySelectorAll(".js-removeButton");

    removeTaskButtons.forEach((removeTaskButton, removeButtonIndex) => {
      removeTaskButton.addEventListener("click", () => {
        removeTask(removeButtonIndex);
      });
    });
  };

  const afterFormSubmit = (newTask) => {
    const newTaskContent = newTask.value.trim();

    newTask.focus();
    newTask.value = "";

    if (newTaskContent === "") return;

    addNewTask(newTaskContent);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = document.querySelector(".js-newTask");

    afterFormSubmit(newTask);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
