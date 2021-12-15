import { URL_GLOBAL } from "../URL_GLOBAL"

export const postApi = async(viaje) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/`;
    const resp = await fetch(URL, {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(viaje)
    });
    const data = await resp.json()
    return data
}