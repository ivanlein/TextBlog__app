import React from "react";

const About = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>This website is created by Ivan Lein,<br/> GitHub link:</h1>
            <div style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: 100,
                aspectRatio: 5}}>
                <a  target="_blank"
                    href="https://github.com/ivanlein"
                    style={{padding: 18,
                    border: '2px solid black', 
                    textDecoration: 'none', 
                    backgroundColor: 'teal',
                    color: 'white',
                    borderRadius: 10}}>Click here</a>
            </div>
        </div>
    );
};

export default About;