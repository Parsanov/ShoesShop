import axios from "axios"

const API_URL = "http://localhost:5227/Shoes/"


export const fetchAllShoes = async () => {
    try {

        const response = await axios.get(`${API_URL}GetAllShoes`, {
        });

        return response.data;

    }
    catch (error){
        console.log("An Error has occured while fetch data", error );
        return [];
    }
}