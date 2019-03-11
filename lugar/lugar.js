const axios = require('axios');

const getLugarLatLon = async(direccionToGet) => {


    //const encodedUrl = encodeURI(argv.direccion);
    const encodedUrl = encodeURI(direccionToGet);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodedUrl,
        headers: { 'X-RapidAPI-Key': 'a658730284mshf6eca63c90d96e1p1dbaa2jsnc215e51e145e' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error("No hay resultados para la direccion");
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;



    /*instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]);
        })
        .catch(err => {
            console.log(err);
        });
    */
    return {
        direccion,
        lat,
        lon
    }

}


module.exports = {
    getLugarLatLon
}