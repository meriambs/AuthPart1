import React,{useState} from 'react'
import { Form ,Button} from 'react-bootstrap';
import { postContact } from '../api/authuser';
import { useNavigate } from 'react-router';
import './Sinin.css'
const Sinin = () => {

  let navigate = useNavigate();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // ici nous avons el handel submit qui permet l'envoie de notre obkjet pour la partie register 
  const handleSubmit=async(value)=>{
    await postContact(value)
     navigate('/login')
    
      }
  return (
    <>
    <div>


   <main>
<div className="row">
    <div className="colm-logo">
        <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/80206a5e-f20e-4288-89cc-6cf2ee871b00.png?auto=format&q=50&w=128&h=128&fit=max&dpr=3" alt="Logo"/>
        <h2><span>You Account </span>helps you connect and share with the people in your life.</h2>
    </div>
    <div className="colm-form">
        <div className="form-container">
         
            <input type="text" placeholder="Email address "  value={email}
          onChange={(e)=>setEmail(e.target.value)} />
      
            <input type="password" placeholder="Password" value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
  
           <input type="text" placeholder="name"  value={name}
         onChange={(e)=>setName(e.target.value)}/>
       
            <button className="btn-login"  onClick={()=>handleSubmit({name,email,password})}>Register</button>
            <br/>
            <button className="btn-new" onClick={()=>navigate('/login')} >login  Account</button>
        </div>
    </div>
</div>
</main>
 
 </div>
 </>
  )
}

export default Sinin