import { URL_GLOBAL } from "../URL_GLOBAL"

export const getApi = async() => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}

export const getApiTypes = async(idViaje) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/${idViaje}`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}
export const getApiSubTypes = async(idViaje) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/subtipo/listar/${idViaje}`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}

export const getApiFiltered = async(idViaje, tipo) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/${idViaje}/${tipo}`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}
export const getApiSubFiltered = async(idViaje, subtipo) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/filter/subtipo/${idViaje}/${subtipo}`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}

export const getApiUpdate = async(idViaje) => {
    const {URL_API} = URL_GLOBAL;
    const URL = `${URL_API}/buscar/actualizar/${idViaje}`;
    const resp = await fetch(URL)
    const data = await resp.json()
    return data
}