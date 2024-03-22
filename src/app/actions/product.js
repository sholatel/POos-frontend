//"use server";
import { API_URL, FETCH_FORMDATA_INIT, FETCH_INIT, FETCH_JSON_INIT } from "../config";



export const createProduct = async (formData) => {
    try {
        const response = await fetch(`${API_URL.DEV_URL}products`, FETCH_FORMDATA_INIT(formData))
        return response;
    }

    catch (err) {
        throw err;
    }
}

export const createCategory = async (payload) => {
    try {
        const response = await fetch(`${API_URL.DEV_URL}products/create-category`, FETCH_JSON_INIT(payload))
        return response;
    }

    catch (err) {
        throw err;
    }
}

export const getCategories = async () => {
    try {
        const response = await fetch(`${API_URL.DEV_URL}products/categories`, FETCH_INIT())
        return response;
    }

    catch (err) {
        throw err;
    }
}