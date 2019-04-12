const yargs = require("yargs");
const chalk = require("chalk");
const { addTask, deleteTask ,getAll} = require("./taskTodo");
yargs.command({
  command: "add",
  builder: {
    title: {
      discription: "Add Task to List",
      alias: "t",
      demandOption: true,
      type: "string"
    },
    discription: {
      discription: "Add Task Discription to list",
      alias: "d",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title, discription }) => {
    addTask(title, discription);
  }
});
yargs.command({
  command: "delete",
  builder: {
    title: {
      discription: "Delte Task from List",
      alias: "t",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title }) => {
    deleteTask(title);
  }
});
yargs.command({
  command:"getall",
  builder:{
    title:{
      discription:"Get All Data From List",
      alias:"v",
      demandOption:false,
    }
  },
  handler:()=>{
    getAll();
  }
})
yargs.parse();
