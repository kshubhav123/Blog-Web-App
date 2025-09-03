import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };




  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between relative">
      <div className="text-xl font-bold text-primary cursor-pointer"><Link to="/">BlogWeb</Link></div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className={`${isActive('/') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Home</Link>

        <Link to="/about" className={`${isActive('/about') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>About</Link>

        <Link to="/profile" className={`${isActive('/profile') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Profile</Link>

        <Link to="/add-blog" className={`${isActive('/add-blog') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Add Blog</Link>

        <Link to="/own-blogs" className={`${isActive('/own-blogs') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Own Blogs</Link>

        <Link to="/blog-list" className={`${isActive('/blog-list') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Blog List</Link>

        <Link to="/categories" className={`${isActive('/categories') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Categories</Link>
        <Link to="/login" className={`${isActive('/categories') ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary`} onClick={handleLinkClick}>Login</Link>

      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md flex flex-col space-y-4 p-4 z-20">
          <Link to="/" onClick={handleLinkClick} className="hover:text-primary">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-primary">About</Link>
          <Link to="/profile" onClick={handleLinkClick} className="hover:text-primary">Profile</Link>
          <Link to="/add-blog" onClick={handleLinkClick} className="hover:underline">Add Blog</Link>
          <Link to="/own-blogs" onClick={handleLinkClick} className="hover:underline">Own Blogs</Link>
          <Link to="/blog-list" onClick={handleLinkClick} className="hover:underline">Blog List</Link>
          <Link to="/categories" onClick={handleLinkClick} className="hover:underline">Categories</Link>

          <Link
            to="/login"
            onClick={handleLinkClick}
            className="px-4 py-1 bg-primary text-white rounded hover:bg-green-600"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
