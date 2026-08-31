import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api`,
    params: {
        key: `1f14478785b944eebb2387cc527d4e9d`
    }
})

// with the above configuration the key will be included In the query string of every http request we send to our backend