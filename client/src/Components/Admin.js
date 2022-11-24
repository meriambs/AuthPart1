import React ,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// ici nous avons jiben les data mt3 el contacts ely ytsn3ou
import { fetchAccounts } from '../api/utilisateurs'
import accountSlice from '../store/accountSlice'
import { setContacts } from '../store/userSlice'
import CarteUSer from './componentAdmin/CarteUSer'

const Admin = ({account}) => {
  // ici juste la page d'admin 
  // dans notre cas l'utilisateur il peut visualiser les accounts el kolla el mwjouda 
  const dispatch=useDispatch();
  const users = useSelector(state=>state.user)

   //we declare a fucntion in useeffect
  //donc mil backend jibna el dta b3thneha lil store w jibneha lil front 
  const getContact=async()=>{
    const data = await fetchAccounts()
    console.log(data,'dataadmin')
    dispatch(setContacts(data))
    }
    // aja async fi wiset useeffect matkhdemichot //njimich n
    useEffect(()=>{
      getContact();
    },[])
    //behy lina juste njib les données w nafichehom 
  console.log('users',users)
  return (
    <div >
      <h1>Welcome to {account.name}</h1>

      l'admin ynejem yfeskh les utilistauer 
            {/* //ici njibou les utilisatuers ely san"ou des accounts  */}
       
       <div style={{display:'flex',justifyContent:'space-around', flexWrap:"wrap"}}>
       {users.map((e)=>  <CarteUSer  user={e} />)}
       </div>
    </div>
  )
}

export default Admin