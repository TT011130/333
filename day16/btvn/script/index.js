//const div = document.querySelector("div#app");
//const createPara = function (text, classes) {
    //const p = document
//}


//const h1 = document.getElementsByClassName(".heading");

//console.log(h1.textContent); // văn bản bên trong
//console.log(h1.innerHTML); //cấu trúc html bên trong
//console.log(h1.id); //giá trị của thuộc tính id
//console.log(h1.className); //giá trị của thuộc tính class
//console.log(h1.title); //giá trị của thuộc tính title

//h1.textContent = "hahahaha";
//h1.innerHTML = "<span>My name is <i>Thanh</i></span>";
//h1.title = "xin chào";

//console.log(h1.attributes.title.value);
//console.log(h1.getAttributes);
//console.log(h1.dataset.abc);
//h1.dataset.abc = "zxc";
//h1.remove();
//h1.classList.add("my-heading", "xxx-heading");
//h1.classList.remove("heading", "xxx-heading");
//h1.classList.toggle("my-heading");

//const qs = document.querySelector;
//const qsa = document.querySelectorAll;
//const ce = document.createElement;

//const div = qs("div#app");

//const p = document.createElement("p");
//const text = document.createTextNode("Xin chào");

//p.textContent = "Xin chào";
//p.id = "paragraph";
//p.classList.add("paragraph");
//p.style.color = "red";
//const img = document.createElement("img");
//img.src = "";
//div.append(p);
const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];
const div = document.querySelector("div#app");

const firstCharUpper = function (fruit) {
    return fruit[0].toUpperCase() + fruit.slice(1).toLowerCase();
    const li = document.createElement("li");
    li.textContent = firstCharUpper(fruit);
    li.className = "fruit-item";

    return li
}

const createFruitItem = function (fruit) {
    //return `<li class = "fruit-item">${firstCharUpper(fruit)}</li>;`
    const li = document.createElement("li");
    li.textContent = firstCharUpper(fruit);
    li.className = "fruit-item";

    return li;
};

const createFruitList = function (fruit) {
    const ul = document.createElement("ul");

    for (let i = 0; i < fruitList.length; i++) {
        const fruit = fruitList[i];
        const li = createFruitItem(fruit);
        ul.append(li);
    }

    return ul;
}

//const items = fruitList.map(toListItem).join("");

//const ul = document.createElement("ul");
//ul.className = "fruit-list";
//ul.innerHTML = items;


const todos = [
    {
      id: 1,
      completed: true,
      content: "Learning HTML"
    },
    {
      id: 2,
      completed: true,
      content: "Learning CSS"
    },
    {
      id: 3,
      completed: false,
      content: "Learning JavaScript"
    }
  ];

  //const toTodoItem = function (todo) {
      //return `<li class="todo-item ${todo.completed ? "completed" : ""}">${todo.content}</li>`
  //};

  //const items = todos.map(toTodoItem).join("");

  //const ul = document.createElement("ul");
  //ul.className = "todo-list";
  //ul.

  const createTodoItem = function (todo) {
      const li = document.createElement("li");
      li.id = todo.id;
      li.classList.add("todo-item");
      li.textContent = todo.content;

      if (todo.completed) {
          li.classList.add("completed");
      }
      return li;
  };

  const createTodoList = function (todos) {
      const ul = document.createElement("ul");
      ul.className = "todo-list";

      for (let i = 0; i < todos.length; i++) {
          const todo = todos[i];
          const li = createTodoItem(todo);
          ul.append(li);
      }

      return ul;
  }

  div.append(createTodoList(todos));
