import React, { useState} from 'react'
import "./signInCard.css"
import Input from '../Input/input'
import eye from '../../assets/icons/eye_on.png'
import "../../styles.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignInCard = () => {

    const [display, setDisplay] = useState(false);

    const [passwordType, setPasswordType] = useState<boolean>(false);

    const togglePassword = () => {

        setPasswordType(!passwordType);

    };
    const navigate = useNavigate();
    
    const handleSubmit = (event: any) =>{
        event.preventDefault();

        const msg = localStorage.getItem("signup");
        if(msg)
        setDisplay(true);

        const number = event.target.number.value;
        const mpin = event.target.mpin.value;

        const userAcc = {
                number,
                mpin
        };
        const accounts = JSON.parse(localStorage.getItem("users") || "[]");
        const newAcc: any[] = [];

        accounts.map((user: any) => {
            if(number === user.number)
            newAcc.push("exist");
        });

        if(newAcc.includes("exist"))
        navigate("/Home");
        else{
            alert("Account does not exist!");
        }
        
        
    }
    
    
    return (
        <>
    
            <div className="signInContainer">
                <div className="group">
                    <div className="heading">sign in to your account </div>
                    <div className="tabs">
                        <div><NavLink to="/" className='mobileHeading'>
                            sign in
                        </NavLink></div>
                        <div ><NavLink to="/SignUp" className='mobileHeading'> sign up</NavLink></div>

                    </div>
                    <div className='formPage'>

                        <form className='formContainer' onSubmit={handleSubmit}>

                            <Input placeholder='Mobile Number' type='tel' name='number' maxLength={10} minLength={10}/>

                            <div className="pinField">

                                <Input placeholder='MPin' type={passwordType ? "text" : "password"}  name='mpin' />
                                <img className="eye" src={eye} alt="eye" onClick={togglePassword} />
                            </div>

                            <div className="forgot"><NavLink to="/Toast"> Forgot your password?</NavLink></div>

                            <button className='btn'>sign in</button>
                            <div className="dont_have_account">Don't have a Account? <Link to="/SignUp" className='links'> SIGNUP</Link></div>


                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignInCard