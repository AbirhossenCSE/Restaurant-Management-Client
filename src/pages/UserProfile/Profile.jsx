import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mb-20 p-10 bg-white shadow-xl rounded-xl">
            <h2 className="text-3xl mt-20 font-semibold text-center text-gray-800 mb-12">User Profile</h2>
            <div className="flex justify-center">
                <figure className="w-36 h-36 rounded-full overflow-hidden shadow-lg">
                    <img
                        src={user?.photoURL}
                        alt="User Profile"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Full Name</h4>
                    <p className="text-gray-600">{user?.displayName || 'N/A'}</p>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Email Address</h4>
                    <p className="text-gray-600">{user?.email || 'N/A'}</p>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Phone Number</h4>
                    <p className="text-gray-600">{user?.phone || 'Not Provided'}</p>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Address</h4>
                    <p className="text-gray-600">{user?.address || 'Not Provided'}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
