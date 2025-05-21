import React, { useState } from 'react';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Blog submitted:\nTitle: ${formData.title}\nCategory: ${formData.category}\nDescription: ${formData.description}`);
        // Add your save logic here
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Add Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
