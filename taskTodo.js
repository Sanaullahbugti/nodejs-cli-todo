const chalk =require('chalk')
const fs = require('fs')

const addTask = ( title , discription )=>{
    const data= loadData();
    const isDuplicate = isExist(title,data);
    if (isDuplicate) {
        console.log(chalk.bgRed.white("Task is Already in list "));
        
    }else{
        const newTask={
            title,
            discription
        }
       const jsonData = [...data,newTask]
       fs.writeFileSync("data.txt",JSON.stringify(jsonData))
    }
}
const isExist=(title,data)=>{
    const filterData= data.filter((rec)=>rec.title===title)
    return filterData.length>0 ?true:false
}
const loadData = ()=>{
    try{
        const data = fs.readFileSync("data.txt");
        return JSON.parse(data);
    }catch(e){
        return []
    }
} 
module.exports={
    addTask
}