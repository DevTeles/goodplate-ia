import axios from "axios";

export const api = axios.create({
    baseURL: `https://api.clarifai.com`,
    headers: {
        "Authorization": "Key c3ab834260f8466daa36141716dd978d"
    }
})