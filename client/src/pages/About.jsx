import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        About BlogWeb
      </h1>

      <p className="text-center max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
        Welcome to <span className="font-semibold text-primary">BlogWeb</span>, a modern platform that allows individuals to express their thoughts, share ideas, and engage with others through writing.
        Whether you're a casual writer or an experienced blogger, BlogWeb is the perfect space to publish your stories, tutorials, and insights.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Our Mission */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make blogging easy and accessible to everyone. We aim to build a community where people from all walks of life can share knowledge, ideas, and creativity in a clean, user-friendly environment.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Create and manage your own blogs</li>
            <li>Comment on blogs and engage with readers</li>
            <li>Save your favorite blogs to read later</li>
            <li>Switch between card and table views</li>
            <li>Responsive, fast, and intuitive interface</li>
          </ul>
        </div>
      </div>

      {/* Meet the Creator */}
      <div className="bg-white rounded-xl p-6 shadow-md mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Meet the Creator</h2>
        <p className="text-gray-700 mb-2">Hi, I'm <strong>Shubhav Kumar</strong> 👋</p>
        <p className="text-gray-600 leading-relaxed">
          I'm a Frontend Developer passionate about building sleek, performant, and user-friendly applications with React.js. BlogWeb is my way of combining creativity and technology to build a platform that helps others share their voices.
        </p>
      </div>

      {/* Footer Line */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} BlogWeb. All rights reserved.
      </div>
    </div>
  );
};

export default About;
