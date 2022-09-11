
const tasks = require ('../tasksData.js');

const retorno = (title) => {

    for (let i=0 ; i < tasks.length ; i++) {

        if (tasks[i].title === title) {
            const desc = tasks[i].desc;
            return desc;
    
        }

    }

    const desc = 'Ese titulo no existe';
    return desc;
   
};

module.exports = retorno;