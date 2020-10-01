{
  const tasks = [
    {
      content: "test1",
      done: true,
    },
    {
      content: "test2",
      done: false,
    },
  ];

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
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({ content: newTaskContent });

    render();
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

    render();
  };

  init();
}
