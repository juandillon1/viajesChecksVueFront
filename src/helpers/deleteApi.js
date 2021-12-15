import { URL_GLOBAL } from "../URL_GLOBAL"

export const deleteApi = async(id) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/${id}`;
    const resp = await fetch(URL, {
        method: 'DELETE'
    })
    const data = await resp.json()
    return data
}