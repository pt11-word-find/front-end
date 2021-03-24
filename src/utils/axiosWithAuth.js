import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: `https://wordsurge.xyz/api/`
        // baseURL: `http://localhost:5000`
         
    })
}

export default axiosWithAuth;