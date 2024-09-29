'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const route = useRouter()
    
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>

            <div className="topdiv" style={{ marginBottom: '20px' }}>
                <button 
                    onClick={() => route.push('/about')}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    About
                </button>

                <button 
                    onClick={() => route.push('/contact')}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Contact
                </button>

                <button 
                    onClick={() => route.push('/footer')}
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Footer
                </button>
            </div>

            <h1 style={{ color: 'purple', fontSize: '3rem', margin: '80px' }}>
                This is Main Page of website.
            </h1>

            <Link href="/navbar" style={{ color: '#0070f3', textDecoration: 'underline', fontSize: '2.5rem' }}>
                Go to Navbar
            </Link>

        </div>
    );
}
