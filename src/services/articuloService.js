import axios from "axios";

const API_URL = "http://localhost:8080/articulos";

export const obtenerArticulos = async () => {

    const response = await axios.get(API_URL);

    return response.data;

};