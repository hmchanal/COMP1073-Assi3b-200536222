// Add a 'ding' sound when a to-do item is checked
const dingSound = new Audio('ding-sound-effect_2.mp3');

//Add some color to the interaction of the user interface
function getRandomColor() {
    const colors = ['#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb', '#b5e5b5', '#c7ceea', '#f5b0cb'];
    return colors[Math.floor(Math.random() * colors.length)];
  }


document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("add-btn");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    addBtn.addEventListener("click", function () {
      const todoText = todoInput.value.trim();
      if (todoText === "") return;
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <input type="checkbox">
        <span>${todoText}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      todoList.appendChild(listItem);
      todoInput.value = "";

      // Set random background color for the application
      document.body.style.backgroundColor = getRandomColor();
    });
  
    todoList.addEventListener("click", function (event) {
      const target = event.target;
  
      if (target.type === "checkbox") {
        const listItem = target.parentElement;
        if (target.checked) {
          listItem.classList.add("completed");
          todoList.appendChild(listItem);
          dingSound.play(); // Play the 'ding' sound
        } else {
          listItem.classList.remove("completed");
          todoList.insertBefore(listItem, todoList.firstChild);
        }
      } else if (target.classList.contains("delete-btn")) {
        const listItem = target.parentElement;
        listItem.remove();
      }
    });
  });
  
