import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { useState } from 'react';


export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'Sign Up' : 'Login'}
            </button>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
     
    );
}