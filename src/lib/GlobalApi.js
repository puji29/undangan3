import axios from "axios";

const axiosClient = axios.create({
    baseURL : 'http://localhost:8000/api'
})

const getReservasi =() => axiosClient.get('/reservasis')

const addReservasi = (dataRsvp) => axiosClient.post('/reservasis', dataRsvp)

const getReservasiById = (id)=> axiosClient.get('/reservasis/'+id)

const updateReservasi = (id,data)=> axiosClient.put('/reservasis/'+id,data)

const deleteReservasi = (id)=> axiosClient.delete('/reservasis/'+id)

const getPageRsvp = (page)=> axiosClient.get('/reservasi?'+page)

const getUcapans = () => axiosClient.get('/ucapans')

const addUcapan = (data) => axiosClient.post('/ucapans',data)

const getUcapanById = (id)=> axiosClient.get('/ucapans/'+id)

const updateUcapan = (id,data)=> axiosClient.put('/ucapans/'+id,data)

const deleteUcapan = (id)=> axiosClient.delete('/ucapans/'+id)

const getXsrf = () => axiosClient.get('/sanctum/csrf-cookie');

const login = (data) => axiosClient.post('/login',data)

const logout = (token)=> axiosClient.get('/logout',{
    headers:{
        Authorization: "Bearer " + token,
    }
})
export default{
    getReservasi,
    addReservasi,
    getUcapans,
    addUcapan,
    getReservasiById,
    getPageRsvp,
    updateReservasi,
    deleteReservasi,
    getUcapanById,
    updateUcapan,
    deleteUcapan,
    getXsrf,
    login,
    logout
}