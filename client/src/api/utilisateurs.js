// import second from 'first'
import axios from 'axios'

export const fetchAccounts =async()=>{
    const {data} = await axios.get(`http://localhost:5000/auth/alluser`);
    return data 
}