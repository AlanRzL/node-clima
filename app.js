const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad a obtener clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLon(argv.direccion)
    .then(console.log)


/*lugar.getLugarLatLon(direccion)
    .then(console.log)
    .catch(console.log)

clima.getClima(lat, lon)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return ('El clima de ' + direccion + ' es de ' + temp + ' grados')
    } catch (e) {
        return ('No se obtuvo ' + direccion)

    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)