import React, { useState, useEffect } from "react";
import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router';
import {fetchAccount} from '../api/authuser'
import {useDispatch,useSelector} from 'react-redux'
import {setAccount } from '../store/accountSlice'

import HomePage from "./HomePage";
import Admin from "./Admin";
import Sinin from "./Sinin";
import NavBarContaine from "./NavBarContaine";
import UserProfile from "./User/UserProfile";

const PrivateRoute = () => {

//ici nous allons ammener l'utilisateur 
  const dispatch = useDispatch()
  const account = useSelector(state=>state.account)
  console.log('userof the private route a voir cote roles ',account)


const getAccount=async()=>{
  const data = await fetchAccount()
  console.log('datat',data)
  dispatch(setAccount(data))
 
}
useEffect(()=>{
  getAccount();
},[])


// //ici le logout permet de supprimer le token et de faire sortir la personne donc un logout
    const navigate = useNavigate()
    const logout=(token)=>{
        localStorage.removeItem("token")
        navigate('/login')
    }


// ici le token c'est pour le trouver dans le localstorage c'est grace a lui que l'utilisateur 
// peut naviger vers l'admin ou user account 
// // biensure selon son role donc le token qui permet d'amaner le user et selon le account.
// role nous avons une direction vers admin ou userAccount

    const token=localStorage.getItem('token')
    console.log('token',token)



  return (
    <div> <div>{ token? (<><NavBarContaine account= {account} logout={logout}/> 
    <br/><br/><br/>
    {account.role === 'admin' ? ( <Admin account= {account}/>) : (<UserProfile account= {account}/>)}
    
    </>):(<Sinin/>)}
</div></div>
  )
}

export default PrivateRoute