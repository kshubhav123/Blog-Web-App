import React from 'react';

const UserProfile = () => {
    // User data as an array of label-value pairs
    const user = [
        { label: 'Name', value: 'Shubhav Kumar' },
        { label: 'Email', value: 'shubhav@example.com' },
        { label: 'Mobile', value: '9876543210' },
        { label: 'City', value: 'Mumbai' },
        { label: 'State', value: 'Maharashtra' },
    ];

    const handleUpdate = () => {
        alert('Update button clicked! Implement your logic here.');
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center  bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl md:shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-700">User Profile</h2>

                <div className="space-y-6">
                    {user.map(({ label, value }) => (
                        <div key={label} className="flex flex-col">
                            <p className="text-sm text-gray-500">{label}</p>
                            <p className="text-lg font-semibold text-gray-800">{value || 'N/A'}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleUpdate}
                    className="mt-10 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
