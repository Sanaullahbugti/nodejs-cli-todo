const yargs = require("yargs");
const chalk = require("chalk");
const { addTask, deleteTask } = require("./taskTodo");
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
    console.log(
      `task added with title ${chalk.bgGreenBright.red(title)} to the list`
    );
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
yargs.parse();
