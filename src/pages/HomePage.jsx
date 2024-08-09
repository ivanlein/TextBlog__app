import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to my website!<br/>Watch more:</h1>
            <div style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: 100,
                aspectRatio: 5}}>
                <Link to='/posts' 
                        style={{padding: 18,
                        border: '2px solid black', 
                        textDecoration: 'none', 
                        backgroundColor: 'teal',
                        color: 'white',
                        borderRadius: 10}}>Click here to watch more</Link>
            </div>
        </div>
    );
};

export default HomePage;