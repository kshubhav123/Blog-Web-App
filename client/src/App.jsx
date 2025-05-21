import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loading';
import Login from './pages/Login';
import Register from './pages/Signup';
import UserProfile from './pages/Profile';
import AddBlog from './pages/AddBlog';
import OwnBlogs from './pages/OwnBlogs';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';
import Categories from './pages/Categories';

const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'))


const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) return <Loader />;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/own-blogs" element={<OwnBlogs />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<BlogList />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
