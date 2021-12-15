import { URL_GLOBAL } from "../URL_GLOBAL"

export const getApi = async() => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}