let toDoList = [
    {
     name : "Learn JavaScript",
     completed : false,
    },
    {
     name : "Learn HTML",
     completed : false,
    },
    {
     name : "Learn CSS",
     completed : false,
    },
    {
     name : "Buy groceries",
     completed : false,
    }
];




const vue = new Vue({
    el: '#app',
    data: {
        vueToDoList: toDoList,
    },
   });
