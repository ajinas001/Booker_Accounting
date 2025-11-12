"use client";
import React from "react";
// Assuming lucide-react is installed in your Next.js project
import { Users, FileText, BarChart2, Menu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

// Mock Data structure for the blog posts
const MOCK_POSTS = [
  {
    id: 1,
    title: "Six Critical Ad Creative Mistakes Every Marketer Makes",
    author: "Swetha Venkateswaran",
    role: "Content Writer @ Pixis",
    date: "5 November, 2025",
    // Changed to placeholder URL for universal runnability. You should use your local path: /images/img3.jpg
    imageUrl: "./images/business7.webp",
    category: "Ad Creative",
    color: "bg-indigo-600", // Replaced bg-secondary
    icon: FileText,
  },
  {
    id: 2,
    title:
      "18 ChatGPT Prompts for Ad Creative and Copywriting That Actually Improve Performance",
    author: "Colin Campbell",
    role: "Head of Content @ Pixis",
    date: "4 November, 2025",
    // Changed to placeholder URL for universal runnability. You should use your local path: /images/image4.jpg
    imageUrl: "./images/img.webp",
    category: "Ad Creative",
    category2: "Performance",
    color: "bg-teal-500",
    icon: Users,
  },
  {
    id: 3,
    title:
      "How to Build a Testing Cadence for Scaling in Performance Marketing",
    author: "William Lewis Eldredge",
    role: "Director - Customer Success @ Pixis",
    date: "31 October, 2025",
    // Changed to placeholder URL for universal runnability. You should use your local path: /images/image3.jpg
    imageUrl: "./images/img1.webp",
    category: "Performance Marketing",
    color: "bg-emerald-500",
    icon: BarChart2,
  },
];

// Reusable component for the Category/Tag buttons
const CategoryTag = ({ text }) => {
  // Enforcing the specific button shape requested: rounded-tl-full rounded-tr-full rounded-br-full
  const buttonStyle =
    "px-8 py-3 text-sm font-semibold tracking-wider uppercase text-white bg-gray-800 transition duration-300 hover:bg-gray-700";
  return (
    <span
      className={`${buttonStyle} rounded-tl-full rounded-tr-full rounded-br-full`}
    >
      {text}
    </span>
  );
};

// Reusable component for the author block
const AuthorBlock = ({ author, role, Icon = Users }) => {
  const initial = author ? author.charAt(0) : "?";

  return (
    <div className="flex items-center space-x-3 mt-6">
      {/* Avatar Placeholder: using bg-indigo-600 for the secondary color */}
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white text-lg font-bold">
        {Icon ? <Icon className="w-5 h-5" /> : initial}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800 leading-tight">
          By {author}
        </p>
        <p className="text-xs text-gray-500 leading-tight">{role}</p>
      </div>
    </div>
  );
};

// Main Card Component
export const BlogCard = ({ post }) => {
  const {
    title,
    author,
    role,
    date,
    imageUrl,
    category,
    category2,
    color,
    icon: Icon,
  } = post;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary transition duration-300 group border border-gray-200 ">
      {/* Image Container with Diagonal Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/800x600/D0F0C0/333?text=Image+Missing";
          }}
        />

        {/* Category Tags - positioned over the image */}
        <div className="absolute top-4 left-4 z-20 flex space-x-2">
          {category && <CategoryTag text={category} />}
          {category2 && <CategoryTag text={category2} />}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 bg-gray-50 flex flex-col justify-between h-auto">
        <h2 className="text-xl font-bold text-gray-900 leading-snug  transition duration-300">
          {title}
        </h2>

        <div className="mt-4">
          <AuthorBlock author={author} role={role} Icon={Icon} />
        </div>

        <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
          {date}
        </p>
      </div>
    </div>
  );
};

// Main App Component
const blog = () => {
  return (
    <div className=" min-h-screen">
      {/* 1. Placeholder Navbar (Replaces <Navbar/> import) */}
      <Navbar />

      {/* 2. Hero Section */}

      <section className="relative overflow-hidden text-white ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] hover:scale-110"
            style={{
              backgroundImage: `url('/images/img3.jpg')`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex text-gray-300 gap-x-2">
              <Link href="/">
                <span className="text-white cursor-pointer hover:text-teal-400 transition-colors">
                  Home
                </span>
              </Link>
              &nbsp;›&nbsp;
              <span className="text-teal-400 font-medium">Blog</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Blog
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Dive into our latest research, actionable guides, and expert
            opinions on performance marketing and ad creative strategies.
          </motion.p>
        </div>
      </section>

      {/* 3. Main Blog Content */}
      <div className="bg-gray-100 p-8 sm:p-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Latest Insights
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            All the posts you need to succeed.
          </p>
        </header>

        <div className="max-w-7xl mx-auto">
          {/* Blog Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* 4. Placeholder Footer (Replaces <Footer/> import) */}
      <Footer />
    </div>
  );
};

export default blog;
