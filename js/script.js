let toDoList = [
 {
  name : "Learn VueJS",
  completed : false,
 },
    {
     name : "Learn JavaScript",
     completed : false,
    },
    {
     name : "Learn HTML",
     completed : true,
    },
    {
     name : "Learn CSS",
     completed : true,
    },
    {
     name : "Buy groceries",
     completed : false,
    }
];

const vue = new Vue({
    el: '#app',
    data: {
        toDoList: toDoList,
    },
    methods: {
     deleteTask(tasks, i) {
      tasks.splice(i, 1);
     }
    },
   });
