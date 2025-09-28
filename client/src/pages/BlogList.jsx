import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, List, AlignJustify, Rows, ChevronsDownUp } from 'lucide-react';

const allBlogs = [
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

const BlogList = () => {
    const [view, setView] = useState('card');
    const [perPage, setPerPage] = useState(10);
    const displayedBlogs = allBlogs.slice(0, perPage);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <h2 className="text-3xl font-bold text-primary">All Blogs</h2>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2 items-center border rounded px-2 py-1">
                        <button onClick={() => setView('card')} className={`p-1 rounded ${view === 'card' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`} title="Card View"><LayoutGrid size={20} /></button>
                        <button onClick={() => setView('table')} className={`p-1 rounded ${view === 'table' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`} title="Table View"><List size={20} /></button>
                        <button onClick={() => setView('list')} className={`p-1 rounded ${view === 'list' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`} title="List View"><AlignJustify size={20} /></button>
                        <button onClick={() => setView('accordion')} className={`p-1 rounded ${view === 'accordion' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`} title="Accordion View"><Rows size={20} /></button>
                    </div>

                    <select
                        value={perPage}
                        onChange={(e) => setPerPage(Number(e.target.value))}
                        className="border border-gray-300 px-3 py-1 rounded focus:outline-none"
                    >
                        {[5, 10, 25, 50, 100].map((num) => (
                            <option key={num} value={num}>Show {num}</option>
                        ))}
                    </select>
                </div>
            </div>

            {view === 'card' && (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {displayedBlogs.map(blog => (
                        <div key={blog.id} className="bg-white p-4 rounded-xl drop-shadow-xl hover:shadow-lg transition">
                            <Link to={`/blogs/${blog.id}`}>
                                <h3 className="text-lg font-semibold text-primary hover:underline mb-2 line-clamp-2">{blog.title}</h3>
                            </Link>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{blog.description}</p>
                            <div className="text-xs text-gray-500 space-y-1">
                                <p><strong>Posted by:</strong> {blog.postedBy}</p>
                                <p><strong>Category:</strong> {blog.category}</p>
                                <p><strong>Date:</strong> {blog.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {view === 'table' && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-xl shadow text-sm">
                        <thead className="bg-primary text-white text-left">
                            <tr>
                                <th className="p-3">Title</th>
                                <th className="p-3">Posted By</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedBlogs.map(blog => (
                                <tr key={blog.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <Link to={`/blogs/${blog.id}`} className="text-blue-600 hover:underline">
                                            {blog.title}
                                        </Link>
                                    </td>
                                    <td className="p-3">{blog.postedBy}</td>
                                    <td className="p-3">{blog.category}</td>
                                    <td className="p-3">{blog.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {view === 'list' && (
                <ul className="space-y-4">
                    {displayedBlogs.map(blog => (
                        <li key={blog.id} className="bg-white p-4 rounded-xl shadow">
                            <Link to={`/blogs/${blog.id}`} className="text-xl font-bold text-primary hover:underline">{blog.title}</Link>
                            <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                            <p className="text-xs text-gray-500 mt-2">By {blog.postedBy} · {blog.category} · {blog.date}</p>
                        </li>
                    ))}
                </ul>
            )}

            {view === 'accordion' && (
                <div className="space-y-4">
                    {displayedBlogs.map(blog => (
                        <details key={blog.id} className="bg-white rounded-xl shadow p-4">
                            <summary className="cursor-pointer font-semibold text-primary">{blog.title}</summary>
                            <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                            <p className="text-xs text-gray-500 mt-2">By {blog.postedBy} · {blog.category} · {blog.date}</p>
                        </details>
                    ))}
                </div>
            )}

        </div>
    );
};

export default BlogList;
