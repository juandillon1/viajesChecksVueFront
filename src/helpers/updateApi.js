import { URL_GLOBAL } from "../URL_GLOBAL"

export const updateApi = async(viaje, id) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/${id}`;
    const resp = await fetch(URL, {
        method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(viaje)
    });
    const data = await resp.json()
    return data
}