import axios from "axios";

// import axios from 'axios.js'


//import { useSnackbar } from 'notistack';


const URL = "https://getinfy.cloud";
//const { enqueueSnackbar } = useSnackbar();

const inspireService = {

    getAll: async (url) => {
        console.log(localStorage.getItem('token'));
        const auth_token = localStorage.getItem('token');
       // axios.defaults.headers.post['Authorization'] = auth_token
        return axios.get(URL + url,{ headers: {"Authorization" : `Bearer ${auth_token}`} })
            .then(response => response.data)
            .catch(error => {
                console.error(error);
            });
    },

    getById: async (url) => {
        return axios.get(URL + url)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
            });
    },

    Update: async (url, data) => {
        return axios.put(URL + url, data)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
            });

    },


    postData: async (url, data) => {
        const auth_token = `Bearer ${localStorage.getItem('token')}`
        axios.defaults.headers.post['Authorization'] = auth_token
        return axios.post(URL + url, data)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
            });

    },
    
    Delete: async (url) => {
        return axios.delete(URL + url)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
            });

    }



}

export default inspireService
