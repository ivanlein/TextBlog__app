import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <MyButton style={{border: 'none'}}
                 onClick={logout}>
                    Exit
                </MyButton>
                <Link className='navbar__link' to='/about'>About me</Link>
                <Link className='navbar__link' to='/posts'>Posts</Link>
            </div>
      </div>
    );
};

export default Navbar;