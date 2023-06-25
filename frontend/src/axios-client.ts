import axios from "axios";

const axiosClient = axios.create({
    // Aqui é a URL da minha API
    baseURL: `${import.meta.env.VITE_API_BASE_URL}api`,
});

export default axiosClient;
