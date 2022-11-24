import React ,{useState} from 'react'
import { Form ,Button} from 'react-bootstrap';
import {  Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Sinin.css'
// import {postLogin} from '../api/userApi'
import { useNavigate } from 'react-router';
import axios from 'axios'
const SignUp = () => {

   //handel the modal
  //  cette partie c'est pour l'affichage d'un modal dans le cas d'un email erroné 
  // la function submit , qui avec le ctach catch une erreur est dans ce cas nous avons le declemnchement du modal 

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


	let navigate = useNavigate();

	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')
  
  
	const onSubmit=async (values) => {
	try{
    const res = await axios.post(`http://localhost:5000/auth/signin`, values);
	  await localStorage.setItem('token', res.data.token);
		navigate('/app/Profile')
  }catch (err) {
        handleShow();
        console.log('your rong')
      }
    
	}


  return (
	<div className='bbody'>
        <Modal
        keyboard
        show={show}
        onHide={handleClose}
        className="ModalContainer col-12"
      >
        <Modal.Header closeButton className=" px-5">
          <Modal.Title className="text-primary fw-normal">
            mot de passe ou email erroné
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className=" px-5">
          <Button
            variant="outline-primary"
            className="col-6"
            onClick={handleClose}
          >
            fermer
          </Button>
        </Modal.Footer>
      </Modal>

  {/* end handel part */}
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

            <button className="btn-login" onClick={()=>onSubmit({email,password})}>Login</button>
            <br/>

            <button className="btn-new" onClick={()=>navigate('/register')} >Register new Account</button>
        </div>
    </div>
</div>
</main>
  
  </div>
  )
}

export default SignUp

