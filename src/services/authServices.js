import axios from "axios";

// import axios from 'axios.js'


//import { useSnackbar } from 'notistack';


const URL = "https://getinfy.cloud";
//const { enqueueSnackbar } = useSnackbar();

const authServices = {

    getAll: async (url) => {
        return axios.get(URL + url)
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


    signUp: async (url, data) => {
        return axios.post(URL + url, data)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
            });

    },
    
    signIn: async (url, data) => {
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

export default authServices
