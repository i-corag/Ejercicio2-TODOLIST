const find = require ('./comandos/find.js');
const list = require ('./comandos/list.js');
const filter = require('./comandos/filter.js');
const retorno = require('./comandos/return.js');

const action = process.argv [2];

if (!action) {
    console.log ('No se ha ingresado ninguna accion');
    return;
}

switch (action) {
    case 'find': {
        const title = process.argv [3];

        if (!title) {
            console.log ('No se ha ingresado ningun titulo');
            break;
        }

        const exist = find (title);
        console.log ('Titulo: ', title);
        console.log ('Existe: ', exist);

        break;
    }

    case 'list': {
        console.log (list());
        break;
    }

    case 'filter': {

        const title = process.argv [3];

        if (!title) {
            console.log ('No se ha ingresado ningun titulo');
            break;
        }

        console.log (filter(title));
        break;
    }

    case 'return': {
        const title = process.argv [3];
        
        if(!title) {
            console.log ('No se ha ingresado ningun titulo');
            break;
        }

        console.log (retorno(title));
        break;
    }

    default: {
        console.log ('Esa accion no esta definida');
        break;
    };

}

