
const tasks = require ('../tasksData.js');

const filter = (title) => {
    const mostrarFilter = [];

    for (let i=0 ; i < tasks.length ; i++) {

        if (tasks[i].title.includes(title)) {
            mostrarFilter.push (tasks[i].title);
        } 
    } 

    if (mostrarFilter.length === 0) {
        const coinc = "No se encontraron coincidencias";
        return coinc;
    
    } else {
        const coinc = mostrarFilter;
        return coinc;
    }
};

module.exports = filter;
