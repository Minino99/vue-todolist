let toDoList = [
  {
    name: "Learn VueJS",
    completed: false,
  },
  {
    name: "Learn JavaScript",
    completed: false,
  },
  {
    name: "Learn HTML",
    completed: true,
  },
  {
    name: "Learn CSS",
    completed: true,
  },
  {
    name: "Buy groceries",
    completed: false,
  },
];

const vue = new Vue({
  el: "#app",
  data: {
    toDoList: toDoList,
    userTask: "",
  },
  methods: {
    deleteTask(i) {
      this.toDoList.splice(i, 1);
    },
    addTask() {
      const testo = this.userTask.trim();
      if (testo !== "") {
        this.toDoList.push({
          name: testo,
          completed: false,
        });
      }
    },
  },
});
