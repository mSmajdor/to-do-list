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

  render();
}
