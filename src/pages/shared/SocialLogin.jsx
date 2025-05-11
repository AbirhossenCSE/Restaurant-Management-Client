import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGooglesignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;

                toast.success('Login Successful with Google!');
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                    setUser(user);
                }, 2000);
            })
            .catch(error => {
                // console.log(error);
                toast.error('Google sign-in failed!');
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