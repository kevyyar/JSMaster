const firstTodo = document.querySelector("#todos .todo");

// firstTodo.style.color = "grey";
// firstTodo.style.textDecoration = "line-through";
// firstTodo.style.opacity = "50%";
firstTodo.getAttribute("class");
// firstTodo.setAttribute("class", "done");

firstTodo.classList.add("done");
firstTodo.classList.remove("done");
// toggle the class "on/off"
// firstTodo.classList.toggle('done')
