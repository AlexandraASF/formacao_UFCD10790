import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from "../../context/userContext";

function Inicio() {

    const navi = useNavigate();
     const {user, setUser} = useContext(userContext);

    const submeterLogin = (e) => {
        setUser("OK segue")
        navi("/dashboard")
        e.preventDefault();
    }

  return (
    <div>
        Inicio
        <button onClick={submeterLogin}> Login </button>
    </div>
  )
}

export default Inicio