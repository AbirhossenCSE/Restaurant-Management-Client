import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-3xl mx-auto mb-4 p-6 bg-white shadow-md rounded mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
            <div className='w-2/6 mx-auto'>
                    <figure className="pt-10">
                        <img
                            src={user?.photoURL}
                            alt="Photo"
                            className="rounded-xl" />
                    </figure>
                </div>
            <div className="grid gap-6">
                <div>
                    <h4 className="font-semibold">Full Name</h4>
                    <p className="text-gray-700">{user?.displayName || 'N/A'}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Email Address</h4>
                    <p className="text-gray-700">{user?.email || 'N/A'}</p>
                </div>

                <div>
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-700">{user?.phone || 'Not Provided'}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-700">{user?.address || 'Not Provided'}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

