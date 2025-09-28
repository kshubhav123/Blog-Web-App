import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const mockBlogs = [
   { id: 1, title: 'Understanding React Hooks', description: 'React Hooks are functions that let you use state and other React features without writing a class...', postedBy: 'Shubhav Kumar', category: 'React', date: '2025-05-20' },
    { id: 2, title: 'JavaScript Closures Explained', description: 'A closure is the combination of a function and the lexical environment within which that function was declared...', postedBy: 'Amit Singh', category: 'JavaScript', date: '2025-05-18' },
     { id: 3, title: 'AI in Everyday Life', description: 'Artificial intelligence is revolutionizing the way we work, shop, and live...', postedBy: 'Neha Sharma', category: 'Technology', date: '2025-04-12' },
  { id: 4, title: 'Top 10 Programming Languages in 2025', description: 'An overview of the most popular programming languages developers are using this year...', postedBy: 'Rahul Mehta', category: 'Technology', date: '2025-03-30' },
  { id: 5, title: 'The Future of Cloud Computing', description: 'Cloud computing continues to evolve with new advancements in scalability and security...', postedBy: 'Priya Verma', category: 'Technology', date: '2025-02-21' },
  { id: 6, title: '5 Simple Yoga Poses for Beginners', description: 'Yoga helps reduce stress and improve flexibility. Here are 5 easy poses to start with...', postedBy: 'Anjali Gupta', category: 'Health', date: '2025-05-02' },
  { id: 7, title: 'Healthy Eating Habits for Busy People', description: 'Tips on maintaining a healthy diet even with a packed schedule...', postedBy: 'Rohit Agarwal', category: 'Health', date: '2025-04-25' },
  { id: 8, title: 'The Science of Good Sleep', description: 'Understanding the importance of deep sleep and tips to improve sleep quality...', postedBy: 'Meera Iyer', category: 'Health', date: '2025-03-14' },
  { id: 9, title: 'Minimalism: Living with Less', description: 'Minimalism is more than a design trend; it’s a lifestyle choice...', postedBy: 'Sneha Rathi', category: 'Lifestyle', date: '2025-01-12' },
  { id: 10, title: 'How to Build Morning Routines', description: 'A productive morning routine can set the tone for the entire day...', postedBy: 'Karan Malhotra', category: 'Lifestyle', date: '2025-02-18' },
  { id: 11, title: 'Hobbies That Boost Mental Health', description: 'From gardening to painting, discover hobbies that improve your mental well-being...', postedBy: 'Ayesha Khan', category: 'Lifestyle', date: '2025-04-02' },
  { id: 12, title: 'Backpacking Across Europe', description: 'A guide to budget-friendly travel across Europe’s most beautiful destinations...', postedBy: 'Arjun Nair', category: 'Travel', date: '2025-05-10' },
  { id: 13, title: 'Top 10 Beaches in the World', description: 'From Maldives to Bora Bora, explore the most breathtaking beaches...', postedBy: 'Simran Kaur', category: 'Travel', date: '2025-03-08' },
  { id: 14, title: 'Solo Travel: Tips and Tricks', description: 'Traveling solo can be liberating. Here’s how to make the most of it...', postedBy: 'Dev Patel', category: 'Travel', date: '2025-04-28' },
  { id: 15, title: 'Investing in 2025: What You Need to Know', description: 'An overview of the latest investment strategies and financial trends...', postedBy: 'Ravi Shankar', category: 'Finance', date: '2025-05-05' },
  { id: 16, title: 'Saving for Retirement Early', description: 'The earlier you start saving for retirement, the more secure your future...', postedBy: 'Pooja Sinha', category: 'Finance', date: '2025-02-10' },
  { id: 17, title: 'Cryptocurrency: Risk or Reward?', description: 'Understanding the opportunities and dangers of investing in crypto...', postedBy: 'Aditya Desai', category: 'Finance', date: '2025-01-15' },
  { id: 18, title: 'Top Study Techniques for Students', description: 'Explore study methods like Pomodoro, spaced repetition, and mind mapping...', postedBy: 'Ritika Das', category: 'Education', date: '2025-03-01' },
  { id: 19, title: 'E-Learning Platforms Comparison', description: 'Coursera, Udemy, and edX compared to help you choose the best one...', postedBy: 'Manish Rao', category: 'Education', date: '2025-04-16' },
  { id: 20, title: 'Balancing Studies and Extracurriculars', description: 'How students can manage academics while pursuing hobbies...', postedBy: 'Nidhi Chawla', category: 'Education', date: '2025-02-22' },
  { id: 21, title: 'React Performance Optimization', description: 'Learn techniques like memoization, lazy loading, and code splitting...', postedBy: 'Shubhav Kumar', category: 'React', date: '2025-05-25' },
  { id: 22, title: 'React Router Explained', description: 'Understanding navigation and routing in React apps using React Router...', postedBy: 'Amit Singh', category: 'React', date: '2025-05-10' },
  { id: 23, title: 'State Management with Redux Toolkit', description: 'Redux Toolkit makes global state management easier in React...', postedBy: 'Neha Sharma', category: 'React', date: '2025-04-19' },
  { id: 24, title: 'ES2025 Features You Should Know', description: 'JavaScript keeps evolving. Here are the features added in ES2025...', postedBy: 'Rohit Agarwal', category: 'JavaScript', date: '2025-05-15' },
  { id: 25, title: 'Asynchronous JavaScript Explained', description: 'A deep dive into promises, async/await, and event loops...', postedBy: 'Priya Verma', category: 'JavaScript', date: '2025-04-05' },
  { id: 26, title: 'Functional Programming in JS', description: 'Explore the power of functional programming with map, reduce, and filter...', postedBy: 'Rahul Mehta', category: 'JavaScript', date: '2025-03-22' },
  { id: 27, title: 'DOM Manipulation Best Practices', description: 'Learn how to efficiently manipulate the DOM with vanilla JS...', postedBy: 'Amit Singh', category: 'JavaScript', date: '2025-02-14' }
];



const BlogDetails = () => {
    const { id } = useParams();
    console.log(id,"idddd");

    console.log(typeof id);


    
    const blog = mockBlogs.find((b) => b.id === Number(id));
    console.log(blog,"mmm");
    

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
                    <BookmarkCheck className="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] bg-clip-text text-transparent" size={24} />
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
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-gradient-to-r from-[#FF4B2B] to-[#FF416C]"
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
