import React, { useEffect, useState } from 'react';
import axios from "axios";
import Footer from './common/Footer';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get("http://localhost:5000/api/blogs")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch(() => {
                console.log("Error fetching data");
            });
    }, []);

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(
                `http://localhost:5000/api/blogs/like/${blog_id}`
            );

            if (response.status === 200) {
                axios.get("http://localhost:5000/api/blogs")
                    .then((res) => {
                        setBlogs(res.data);
                    });
            }
        } catch (error) {
            console.error("Error liking the blog post:", error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault();

        const today = new Date();
        const date = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        axios.post("http://localhost:5000/api/blogs", {
            newTitle,
            newContent,
            date,
            likes: 0
        }).then(() => {

            axios.get("http://localhost:5000/api/blogs")
                .then((res) => {
                    setBlogs(res.data);
                });

            setNewTitle('');
            setNewContent('');
        });
    };

    return (
        <div className="min-h-screen bg-slate-100 py-14">

            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-5xl font-bold">
                    Latest <span className="text-orange-500">Blogs</span> 📚
                </h2>

                <p className="text-gray-500 mt-4 text-lg">
                    Share your thoughts, ideas and experiences with the world
                </p>
            </div>

            {/* Form */}
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg mb-14">

                <h3 className="text-2xl font-semibold mb-6 text-center">
                    Create New Blog ✍️
                </h3>

                <form
                    onSubmit={handleNewBlogSubmit}
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        placeholder="Enter Blog Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />

                    <textarea
                        placeholder="Write your blog content here..."
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        rows="5"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300"
                    >
                        Publish Blog 🚀
                    </button>
                </form>
            </div>

            {/* Blog Cards */}
            <div className="container mx-auto px-6">

                {blogs.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl">
                        No blogs available yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100"
                            >

                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {blog.newTitle}
                                </h3>

                                <p className="text-orange-500 text-sm font-medium mb-4">
                                    📅 {blog.date}
                                </p>

                                <p className="text-gray-600 leading-7 mb-6">
                                    {blog.newContent}
                                </p>

                                <div className="flex items-center justify-between">

                                    <button
                                        onClick={() => handleLike(blog._id)}
                                        className="bg-orange-100 text-orange-600 px-4 py-2 rounded-xl hover:bg-orange-200 transition"
                                    >
                                        ❤️ Like
                                    </button>

                                    <span className="font-semibold text-gray-700">
                                        {blog.likes} Likes
                                    </span>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

            <Footer />
        </div>
    );
}

export default Blogs;