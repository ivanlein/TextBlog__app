import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../components/context";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1 style={{marginBottom: 25}}>Login page</h1>
            <p style={{marginBottom: 20}}>Login to watch more</p>
            <form onSubmit={login}>
              <MyInput type='text' placeholder='Login'/>
              <MyInput type='password' placeholder='Password'/>
              <MyButton style={{marginLeft: '0'}}>Login</MyButton>
              <MyButton>
                <Link to='/posts'
                style={{textDecoration: 'none',
                    color: 'white'}}>
                    I logged
                </Link>
              </MyButton>
            </form>
        </div>
    );
};

export default Login;