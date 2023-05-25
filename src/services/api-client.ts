import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '027fedfba7894183a56eccdab6b6fa85'

    }
})