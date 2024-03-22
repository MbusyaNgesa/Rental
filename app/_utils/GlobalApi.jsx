const { default: axios } = require("axios");


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers: {
        'Authorization':`Bearer ${API_KEY}`
        
    }
})


const getCategory=()=>axiosClient.get('/categories?populate=*');

const getCarList=()=>axiosClient.get('/rentals?populate=*');

const getCarByCategory=()=>axiosClient.get('/rentals?populate=*');

const getCarById=(id)=>axiosClient.get('/rentals?populate=*');

export default{
    getCategory,
    getCarList,
    getCarByCategory,
    getCarById
}