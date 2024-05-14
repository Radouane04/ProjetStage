import React, { useState } from 'react';
import { Admines } from './identification';

const Login = ({ setIsAdmin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertErr, setAlertErr] = useState(false);

    function connect(e) {
        e.preventDefault();
        
        const isAdmin = Admines.find(a => a.name === username && a.password === password);
        if (isAdmin) {
            setIsAdmin(true);
        } else {
            setAlertErr(true);
        }

        setUsername('');
        setPassword('');
    }
    
    return (
        <>
        <h1 className='container' style={{color: 'rgb(253, 97, 0)'}}>Espace Client</h1>

            <div className='w-50 mx-auto s p-3 rounded-3 mt-4'>
                <div className='testlogin'>
                    <img src='/img/bpJPG.JPG' alt='logo tournoi' style={{ width: '300px', height: '160px' }} />
                </div>
                <form onSubmit={connect}>
                    <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>Identifiant:</label>

                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter votre Identifiant"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ color: 'rgb(253, 97, 0)' }}>Password:</label>

                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter votre password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-100"
                        style={{ backgroundColor: 'rgb(253, 97, 0)' }}
                    >
                        Submit
                    </button>
                </form>
                {alertErr && <div className='mt-3 alert alert-danger text-center'>You Are Not Admin!</div>}
            </div>
        </>
    );
}

export default Login;
