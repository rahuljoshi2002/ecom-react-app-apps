import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

function get(apiPath) {
    return axios.get(apiPath);
}


axios.interceptors.request.use((config) => {
   config.headers = {
    
   }
}, (error) => {
  
    return Promise.reject(error);
});

export { get };
