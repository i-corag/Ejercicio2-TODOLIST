const tasks = require ('../tasksData.js');

const edit = (title, nuevaDesc) => {

    for (let i=0 ; i < tasks.length ; i++) {

        const mostrarNuevaDesc = {};

        if (tasks[i].title === title) {
            const mostrarNuevaDesc = {
                title: title,
                desc: nuevaDesc
            }
            return mostrarNuevaDesc;
    
        }

    }

    const sinTitulo = 'Ese titulo no existe';
    return sinTitulo;
   
};

module.exports = edit;