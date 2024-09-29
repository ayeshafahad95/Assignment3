import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <h1 style={{  color: 'navy', fontSize: '2rem', margin: '70px', backgroundColor: 'orange', width:'500px',paddingLeft:'0',
                display:"flex"}}>Contact Page</h1>
            <br />
            <Link href="/" style={{  color: '#0070f3', 
                textDecoration: 'none', 
                fontSize: '1.2rem',
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'lightblue',
                borderRadius: '5px',
                marginTop: '20px',
                textAlign: 'center',
                transition: 'background-color 0.5s',
                cursor: 'pointer' }}>
                Go back Home
            </Link>
        </>
    );
};

export default Contact;
