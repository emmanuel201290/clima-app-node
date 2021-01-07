const axios = require('axios');

const getLugarLatLng = async (dir) =>{
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeUrl}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key':'e435d6995emsh3f44d201236db5fp1f0278jsn4a4a162a13cb'}
    });
    
    /*instance.get()
            .then(resp=>{
                console.log(resp.data.location);
            }).catch(err =>{
                 console.log('ERROR!!!!', err);
            })*/
    const resp = await instance.get();  
    
    //console.log(resp.data.location)
    /*if(resp.data.location.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }*/
    if(resp.data.location===undefined){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLng
}