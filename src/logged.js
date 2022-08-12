import { Link } from "react-router-dom"
const Logged=()=>{
    return(
        <div className="login">
            <label htmlFor="user">User Name</label>
            <input type="text" id="user" className="inputs" placeholder="E-mail"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="inputs" placeholder=""/>
           <button className="btn" onClick={(e)=>{
                if(document.querySelector('#user').value!=='' && document.querySelector('#password').value!==''){
                    e.preventDefault()
                    window.location.href='/data'
                }else{
                    alert('mail and password should be filled')
                }
            }}>Login</button>
        </div>
    )
}
export default Logged;