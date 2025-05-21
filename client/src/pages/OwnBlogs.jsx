import React from 'react';

const OwnBlogs = () => {
    // Placeholder blogs - in real app, fetch logged-in user's blogs
    const ownBlogs = [
        { id: 1, title: 'My First Blog', category: 'Personal', description: 'This is my first blog.' },
        { id: 2, title: 'React Tips', category: 'Programming', description: 'Some useful React tips.' }
    ];

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Own Blogs</h2>
            {ownBlogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs found.</p>
            ) : (
                ownBlogs.map(blog => (
                    <div key={blog.id} className="mb-6 p-4 border border-gray-300 rounded-md">
                        <h3 className="text-xl font-semibold">{blog.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
                        <p>{blog.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default OwnBlogs;
