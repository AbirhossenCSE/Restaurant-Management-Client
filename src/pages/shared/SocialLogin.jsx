import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGooglesignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;

                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have successfully logged in with Google.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                    setUser(user);
                }, 2000);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='divider'>OR</div>
            <button onClick={handleGooglesignIn} className='btn w-full mb-4'>Google</button>
        </div>
    );
};

export default SocialLogin;