import './App.css';
import {Routes,Route} from 'react-router-dom'
import Sinin from './Components/Sinin';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import PrivateRoute from './Components/PrivateRoute';
import UpdateForm from './Components/User/UpdateForm';
import UserProfile from './Components/User/UserProfile';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/register' element={<Sinin/>}/>
      <Route path='/login' element={<SignUp/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/app/Profile' element={<PrivateRoute/>}/>
{/* //ici nous avons un path pour l'update router de notre user  */}
<Route path='/update/:id' element={<UpdateForm/>}/>
    </Routes>
    </div>
  );
}

export default App;



