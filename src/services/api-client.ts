import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "8d40075223a64157b85c9480c79280fc"
    }
})