import React, { useState } from "react";
import { Calendar, User, Search } from "lucide-react";
import { motion } from "framer-motion"; // For animations

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      description:
        "Artificial Intelligence is transforming industries, from healthcare to finance. Discover the latest advancements.",
      imageUrl: "https://picsum.photos/400/200?random=1",
      date: "Dec 30, 2024",
      author: "John Doe",
    },
    {
      id: 2,
      title: "The Rise of Quantum Computing",
      description:
        "Quantum computing promises to revolutionize industries, making complex computations possible.",
      imageUrl: "https://picsum.photos/400/200?random=2",
      date: "Dec 25, 2024",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "The Future of Space Travel",
      description:
        "Space travel is evolving rapidly, with private companies launching their own missions.",
      imageUrl: "https://picsum.photos/400/200?random=3",
      date: "Dec 20, 2024",
      author: "Mark Johnson",
    },
    {
      id: 4,
      title: "Sustainable Energy: The Key to a Green Future",
      description:
        "Sustainability is at the forefront of global development, with renewable energy taking center stage.",
      imageUrl: "https://picsum.photos/400/200?random=4",
      date: "Dec 18, 2024",
      author: "Alice Brown",
    },
    {
      id: 5,
      title: "5G: A New Era of Connectivity",
      description:
        "5G technology promises to change the way we interact with the world. Learn about its potential and challenges.",
      imageUrl: "https://picsum.photos/400/200?random=5",
      date: "Dec 15, 2024",
      author: "Charlie Davis",
    },
    {
      id: 6,
      title: "Blockchain: The Future of Digital Transactions",
      description:
        "Blockchain technology is more than just cryptocurrency. It has the potential to transform various industries.",
      imageUrl: "https://picsum.photos/400/200?random=6",
      date: "Dec 10, 2024",
      author: "Grace Lee",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredArticles(articles);
      setSuggestions([]);
    } else {
      setSuggestions(
        articles.filter(
          (article) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredArticles(
        articles.filter(
          (article) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold leading-tight mb-4">
            Welcome to Our Professional Blog
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Stay updated with the latest articles, insights, and trends from
            industry experts.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition">
            Explore Our Content
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <div className="relative w-1/2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full py-3 px-6 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search articles..."
            />
            <Search className="absolute top-3 right-3 text-gray-600" />
            {suggestions.length > 0 && (
              <div className="absolute w-full bg-white border rounded-lg shadow-lg mt-2 z-10 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {suggestion.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center text-gray-600 text-sm space-x-4">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center text-gray-600 text-sm space-x-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Posts Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Popular Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center text-gray-600 text-sm space-x-4">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section with Animation */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Watch Our Latest Videos
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video 1"
                className="w-full h-64 border-none"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI and the Future
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore the transformative power of Artificial Intelligence.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <iframe
                src="https://www.youtube.com/embed/7wtfhZwyrcc"
                title="Video 2"
                className="w-full h-64 border-none"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Future of Space Exploration
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the new frontiers of space exploration.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="Video 3"
                className="w-full h-64 border-none"
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Blockchain for the Future
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how blockchain is reshaping industries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Technology",
            "Business",
            "Lifestyle",
            "Health",
            "Travel",
            "Food",
            "Education",
            "Finance",
            "Sports",
            "Entertainment",
          ].map((category, i) => (
            <button
              key={i}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What Our Readers Say
          </h2>
          <div className="flex space-x-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-lg text-gray-600 mb-4">
                "This blog is my go-to source for the latest insights in AI and
                technology!"
              </p>
              <p className="font-semibold text-gray-800">Emily Roberts</p>
              <p className="text-sm text-gray-500">Technology Enthusiast</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-lg text-gray-600 mb-4">
                "The articles on blockchain and space travel are truly
                fascinating. Keep it up!"
              </p>
              <p className="font-semibold text-gray-800">Lucas Green</p>
              <p className="text-sm text-gray-500">Business Leader</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Authors Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Featured Authors
          </h2>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/100?random=1"
                alt="Author"
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">AI Expert & Writer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/100?random=2"
                alt="Author"
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="font-semibold text-gray-800">Jane Smith</p>
              <p className="text-sm text-gray-500">Quantum Computing Specialist</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/100?random=3"
                alt="Author"
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="font-semibold text-gray-800">Alice Brown</p>
              <p className="text-sm text-gray-500">Space Exploration Writer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
