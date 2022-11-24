import React from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarContaine = ({logout,account}) => {
console.log(account,"notre account object")
  return (
    <div>navbar c'est tt

       {/* //ici nous avons un affichge selon le role de notre utilisateur si 
       c'eest un admin alors juste le home et work , si nn le reste dans le cas d'un utilisateur  */}

       
        <nav class="navMenu">
          {account.role==='admin' ?  ( <>
             <a href="#">Home</a>
           
             <a href="#">Work</a>
            
             </>): ( <>
             <a href="#">Home</a>
             <a href="#">Blog</a>
             <a href="#">Work</a>
             <a href="#">About</a>
             </>)}
     
  
      <Button variant="outline-secondary" onClick={()=>logout()}>Logout</Button>{' '}

      <div class="dot">
     
      </div>
    </nav>
    </div>
  )
}

export default NavBarContaine