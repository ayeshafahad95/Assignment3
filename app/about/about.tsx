import React from "react";
import Link from "next/link";

const About = () => {
    return (
        <>
            <h1 style={{ color: 'navy', fontSize: '2rem', margin: '70px', backgroundColor: 'pink', width:'500px',paddingLeft:'0',
                display:"flex",
                justifyItems:"center"

            }}>HEY! WELCOME TO ABOUT PAGE</h1>
            <br />
            <Link href="/" style={{  color: '#0070f3', 
                textDecoration: 'none', 
                fontSize: '1.2rem',
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'lightgray',
                borderRadius: '5px',
                marginTop: '20px',
                textAlign: 'center',
                transition: 'background-color 0.3s',
                cursor: 'pointer'}}>
                Go back Home
            </Link>
        </>
    );
};

export default About;
