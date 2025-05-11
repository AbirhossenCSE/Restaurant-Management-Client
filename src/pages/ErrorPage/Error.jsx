import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <img className='mx-auto' src="https://i.ibb.co.com/NrGjttC/404.gif" alt="" />
            <Link to='/' className='btn btn-neutral flex items-center justify-center w-1/5 mx-auto'>Go Back to Home</Link>
        </div>
    );
};

export default Error;