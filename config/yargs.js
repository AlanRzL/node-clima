const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad a obtener clima',
        demand: true
    }
}).argv;