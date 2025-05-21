import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const mockBlogs = [
    {
        id: '1',
        title: 'Understanding React Hooks',
        description: 'React Hooks let you use state and other React features without writing a class...',
        postedBy: 'Shubhav Kumar',
        category: 'React',
        date: '2025-05-20',
    },
    {
        id: '2',
        title: 'JavaScript Closures Explained',
        description: 'Closures are a fundamental concept in JavaScript...',
        postedBy: 'Amit Singh',
        category: 'JavaScript',
        date: '2025-05-18',
    },
];



const BlogDetails = () => {
    const { id } = useParams();
    const blog = mockBlogs.find((b) => b.id === id);

    const [comments, setComments] = useState([
        { id: 1, name: 'John Doe', content: 'Great post!' },
        { id: 2, name: 'Jane Smith', content: 'Very informative. Thanks!' },
    ]);

    const [newComment, setNewComment] = useState('');
    const [saved, setSaved] = useState(false);


    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([
                ...comments,
                { id: Date.now(), name: 'Current User', content: newComment.trim() },
            ]);
            setNewComment('');
        }
    };

    if (!blog) {
        return <div className="text-center mt-10 text-red-500">Blog not found.</div>;
    }


    const handleSave = () => {
        setSaved(!saved);
        const savedBlogs = JSON.parse(localStorage.getItem("savedBlogs")) || [];
        if (!saved) {
            localStorage.setItem("savedBlogs", JSON.stringify([...savedBlogs, blog]));
        } else {
            localStorage.setItem(
                "savedBlogs",
                JSON.stringify(savedBlogs.filter((b) => b.id !== blog.id))
            );
        }
    };

    return (
        <div className="max-w-3xl relative mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">

            <button
                onClick={handleSave}
                title={saved ? "Remove from Saved" : "Save for Later"}
                className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow hover:shadow-lg transition"
            >
                {saved ? (
                    <BookmarkCheck className="text-green-600" size={24} />
                ) : (
                    <Bookmark className="text-gray-500" size={24} />
                )}
            </button>

            {/* Blog Info */}
            <h1 className="text-3xl font-bold text-primary mb-4">{blog.title}</h1>
            <div className="text-sm text-gray-500 mb-6 space-y-1">
                <p><strong>Posted by:</strong> {blog.postedBy}</p>
                <p><strong>Category:</strong> {blog.category}</p>
                <p><strong>Date:</strong> {blog.date}</p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {blog.description}
            </p>

            {/* Comment Section */}
            <div className="border-t pt-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Comments</h3>

                {/* Existing Comments */}
                <div className="space-y-4 mb-6">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="bg-gray-100 p-3 rounded">
                                <p className="text-sm text-gray-700"><strong>{comment.name}</strong></p>
                                <p className="text-gray-600">{comment.content}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No comments yet.</p>
                    )}
                </div>

                {/* Add New Comment */}
                <form onSubmit={handleCommentSubmit} className="space-y-3">
                    <textarea
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                        rows="3"
                        placeholder="Write your comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Post Comment
                    </button>
                </form>
            </div>

            {/* Back to List */}
            <div className="mt-8">
                <Link
                    to="/blog-list"
                    className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                    Back to Blog List
                </Link>
            </div>
        </div>
    );
};

export default BlogDetails;
