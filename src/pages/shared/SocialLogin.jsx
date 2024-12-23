import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const handleGooglesignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
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