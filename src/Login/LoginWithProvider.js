import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import './LoginWithProvider.css';
import { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';

const LoginWithProvider = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    return (
        <div className='d-sm-block d-lg-flex  justify-content-center'>
            <div className='provider'>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 me-3' variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
            </ButtonGroup>
            </div>
            <div className='provider'>
            <ButtonGroup vertical>
                <Button onClick={handleGithubSignIn} className='mb-2 me-3' variant='outline-primary'> <FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            </div>
        </div>
    );
};

export default LoginWithProvider;