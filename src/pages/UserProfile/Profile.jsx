import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-3xl mx-auto mb-4 p-6 bg-base-100 shadow-md rounded">
            <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
            <div className=''>
                    <figure className="pt-10">
                        <img
                            src={user?.photoURL}
                            alt="Photo"
                            className="rounded-xl mx-auto" />
                    </figure>
                </div>
            <div className="grid gap-6">
                <div className='mx-auto mt-8'>
                    <h4 className="font-semibold text-center">Full Name</h4>
                    <p className="text-gray-700 text-center"> {user?.displayName || 'N/A'}</p>
                </div>
                <div className='mx-auto mt-8'>
                    <h4 className="font-semibold text-center">Email Address</h4>
                    <p className="text-gray-700 text-center">{user?.email || 'N/A'}</p>
                </div>

                <div className='mx-auto mt-8'>
                    <h4 className="font-semibold text-center">Phone Number</h4>
                    <p className="text-gray-700 text-center">{user?.phone || 'Not Provided'}</p>
                </div>
                <div className='mx-auto mt-8'>
                    <h4 className="font-semibold text-center">Address</h4>
                    <p className="text-gray-700 text-center">{user?.address || 'Not Provided'}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

