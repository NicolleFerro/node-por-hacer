const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualizar a estado completado una tarea', { descripcion, completado })
    .command('borrar', 'Borrar una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}