import React from 'react'
import Footer from './Common/Footer'

function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            About <span className="text-orange-500">Me</span>
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Welcome to my personal blog space
          </p>
        </div>


        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Hello, I'm Kavya 👋
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            I am a passionate technology enthusiast who loves learning,
            creating and sharing knowledge through blogs. This platform is
            a place where I share my thoughts, experiences and ideas about
            technology and personal growth.
          </p>

          <p className="text-gray-600 leading-8 mb-5">
            I enjoy exploring web development, building creative projects
            and improving my skills every day. Through this blog, I aim to
            connect with people and share useful information in a simple way.
          </p>


          {/* Skills */}
          <h3 className="text-2xl font-bold mt-8 mb-4">
            My Interests 💡
          </h3>

          <div className="flex flex-wrap gap-4">

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
              Web Development
            </span>

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
              React
            </span>

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
              Full Stack Development
            </span>

            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full">
              Technology
            </span>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default About