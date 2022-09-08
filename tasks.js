const find = require ('./comandos/find.js');

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

    default: {
        console.log ('Esa accion no esta definida');
        break;
    }
}
