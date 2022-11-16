import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Login_Create_Context } from '../../../context-api/authntication-context';

function Logout_Bar() {
    const Navi=useNavigate()
    const Login_Create_Context_Log=useContext(Login_Create_Context);
    const Logout=()=>{
        axios.post(`${process.env.REACT_APP_API}logout/${Login_Create_Context_Log.AllUserDaata.regusterid}`);
        localStorage.SaveAuthnticaiton=false;
        Navi("/")
    }
  return (

    <ul className='logout-bar-section'> 
        <li><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" /> <h4>lith</h4></li>
        <li onClick={Logout}><button>Sign Out</button></li>
    </ul>
  )
}

export default Logout_Bar
