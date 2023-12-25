import axios from 'axios';
import configs from '../configs';
import { errorLogger } from '../logger';

// Create an Axios instance with default configuration
const http = axios.create({
    baseURL: configs.HOST_API, // Your API base URL
    timeout: 30000, // Timeout in milliseconds,
});

// Request interceptor to add headers, authentication, etc.
http.interceptors.request.use(
    (config) => {
        // Modify the request config here (e.g., add headers)
        // config.headers.Authorization = `Bearer ${yourAuthToken}`;
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response interceptor to handle responses or errors
http.interceptors.response.use(
    (response) => {
        // Modify the response data
        return response;
    },
    (error) => {
        // Handle response errors here
        // For example, you can check for specific status codes and take actions accordingly
        if (error.response) {
            // Handle HTTP error responses (status codes other than 2xx)
            errorLogger(`HTTP error:, ${error.response.status}`);
        } else if (error.request) {
            // Handle request errors (no response received)
            errorLogger(`Request error: ${error.request}`);
        } else {
            // If something else went wrong
            errorLogger(`Error: ${error.message}`);
        }

        return error.response;
    }
);

export default http;
