
const tasks = require ('../tasksData.js');

const find = (title) => {

    for (let i=0 ; i < tasks.length ; i++) {

        if (tasks[i].title === title) {
            return true;
        }

    }
    
    return false;
};

module.exports = find;
