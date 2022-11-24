import axios from 'axios'




//get a singel user 
export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get(`http://localhost:5000/auth/uraccount`,{headers:{Authorization:token}} );
    return data 
}
export const postContact = async(values)=>{
    const addingContact = await axios.post(`http://localhost:5000/auth/singup`,{...values})

}