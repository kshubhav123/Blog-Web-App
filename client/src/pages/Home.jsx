import { Link } from 'react-router-dom';
import { Pen, BookOpenText, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-gray-800">
      <section className="bg-gradient-to-br to-[#ffebe8] from-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to BlogWeb
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            A platform where ideas meet expression. Share your stories, inspire others, and connect through blogs.
          </p>
          <Link
            to="/add-blog"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full text-lg hover:bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] transition"
          >
            Start Writing
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose BlogWeb?</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <Pen className="mx-auto text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Easy to Write</h3>
            <p className="text-gray-600">Create blogs with our user-friendly editor. Focus on writing, we handle the rest.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <BookOpenText className="mx-auto text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Organized Reading</h3>
            <p className="text-gray-600">Save blogs, switch between views, and stay updated with all kinds of content.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <Users className="mx-auto text-primary mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Engage & Connect</h3>
            <p className="text-gray-600">Comment, discuss, and be part of a community of curious minds and writers.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the BlogWeb Community Today</h2>
        <p className="text-lg mb-6">Start reading, writing, and saving your favorite blogs right now.</p>
        <Link
          to="/register"
          className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Create an Account
        </Link>
      </section>

      <div className="text-center text-sm py-6 text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} BlogWeb. Built with ❤️ by Shubhav Kumar.
      </div>
    </div>
  );
};

export default Home;
