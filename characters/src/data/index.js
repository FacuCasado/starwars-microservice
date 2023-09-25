const axios = require("axios");
const {DB_URI}=process.env

module.exports = {
    list:async ()=>{ const response = await axios.get(DB_URI); return response.data.data },
    create:async(charData)=>{ const response = await axios.post(DB_URI,charData); return response.data.data},
    id:async (id)=>{ const response = await axios.get(`${DB_URI}/${id}`);return response.data.data},
    delete:async(id)=>{ const response = await axios.delete(`${DB_URI}/${id}`); return response.data.data}
}