import React from 'react'
import './UpdateForm.css'
import { useNavigate, useParams } from "react-router";

const UpdateForm = () => {

// ici nous avons l'update form 
// alors nous allons faire un update , nous allons 
// utiliser les meme detail sque la contact list 
// nous allons ammener les data unique de notre 
// utilisatuer et faire l'upodate 
// al'api sera dans le fichier utilisateur 
const navigate = useNavigate()

const update=()=>{


    navigate('/app/Profile')
}
  return (



    <div className='body'>
        <div className="container">  
  <form id="contactus" >
    <h3>Update  Profil form</h3>
    
    <fieldset>
      <input placeholder="name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Email Address" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Password" type="tel" tabindex="3" required />
    </fieldset>
   
    <fieldset>
      <button name="button" type="submit" id="contactus-submit" onClick={()=>update()}>Update Now</button>
    </fieldset>
  
  </form>
</div>
    </div>
  )
}

export default UpdateForm