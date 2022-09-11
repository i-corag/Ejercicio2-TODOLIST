const tasks = require ('../tasksData.js');

    const list = () => {
        const mostrarList = [];
      
    for (let i=0 ; i < tasks.length ; i++) {

       mostrarList.push (tasks[i].title);
    };

    return mostrarList;

}
    

module.exports = list;
