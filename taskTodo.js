const chalk = require("chalk");
const fs = require("fs");

const addTask = (title, discription) => {
  const data = loadData();
  const isDuplicate = isExist(title, data);
  if (isDuplicate) {
    console.log(chalk.bgRed.white("Task is Already in list "));
  } else {
    const newTask = {
      title,
      discription
    };
    const jsonData = [...data, newTask];
    fs.writeFileSync("data.txt", JSON.stringify(jsonData));
    console.log(
      chalk.bgGreenBright(`task added with title ${newTask.title} to the list`)
    );
  }
};
const isExist = (title, data) => {
  const filterData = data.filter(rec => rec.title === title);
  return filterData.length > 0 ? true : false;
};
const loadData = () => {
  try {
    const data = fs.readFileSync("data.txt");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
const deleteTask = title => {
  const data = loadData();
  const present = isExist(title, data);
  if (present) {
    console.log("title:", title);
    const updatedData = data.filter(rec => {
      return rec.title !== title;
    });
    console.log("updated data", updatedData);
    fs.writeFileSync("data.txt", JSON.stringify(updatedData));
    console.log(chalk.bgRed.white("Task is deleted from  list "));
  } else {
    console.log(chalk.bgRed.white("Task is not  in list "));
  }
};
getAll = () => {
  const data = loadData();
  data.map(rec => {
    console.log(
      chalk.bgWhite.black(
        `Task Title \t\t${chalk.bgBlack.blue(
          rec.title
        )}\t\tTask discription\t${chalk.bgBlack.blue(rec.discription)}`
      )
    );
  });
};
module.exports = {
  addTask,
  deleteTask,
  getAll
};
