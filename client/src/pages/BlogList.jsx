import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, List, AlignJustify, Rows, ChevronsDownUp } from 'lucide-react';

const allBlogs = [
    { id: 1, title: 'Understanding React Hooks', description: 'React Hooks are functions that let you use state and other React features without writing a class...', postedBy: 'Shubhav Kumar', category: 'React', date: '2025-05-20' },
    { id: 2, title: 'JavaScript Closures Explained', description: 'A closure is the combination of a function and the lexical environment within which that function was declared...', postedBy: 'Amit Singh', category: 'JavaScript', date: '2025-05-18' },
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
                        <div key={blog.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
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
