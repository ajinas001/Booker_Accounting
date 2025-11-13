"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, FileText, BarChart2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";

export default function BlogPage() {
  const POSTS = [
    {
      id: 1,
      title: "Six Critical Ad Creative Mistakes Every Marketer Makes",
      author: "Swetha Venkateswaran",
      role: "Content Writer @ Pixis",
      date: "5 November, 2025",
      imageUrl: "/images/business7.webp",
      category: "Ad Creative",
      color: "bg-indigo-600",
      icon: FileText,
    },
    {
      id: 2,
      title:
        "18 ChatGPT Prompts for Ad Creative and Copywriting That Actually Improve Performance",
      author: "Colin Campbell",
      role: "Head of Content @ Pixis",
      date: "4 November, 2025",
      imageUrl: "/images/img.webp",
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
      imageUrl: "/images/img1.webp",
      category: "Performance Marketing",
      color: "bg-emerald-500",
      icon: BarChart2,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* ✅ HERO SECTION */}
        <section className="relative overflow-hidden text-white bg-black">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/img3.webp"
              alt="Blog"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transform-gpu"
              style={{
                WebkitTransform: "translateZ(0)",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
          </motion.div>

          {/* Text Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
                <Link
                  href="/"
                  className="text-white hover:text-teal-400 transition-colors"
                >
                  Home
                </Link>
                <span>›</span>

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
                Blogs
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

        {/* ✅ BLOG SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the posts you need to succeed.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {POSTS.map((post) => {
              const Icon = post.icon;
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl overflow-hidden  transition-all border border-gray-200"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.category && (
                        <span className="px-4 py-2 bg-black/60 text-xs font-semibold uppercase tracking-wider rounded-full text-white">
                          {post.category}
                        </span>
                      )}
                      {post.category2 && (
                        <span className="px-4 py-2 bg-black/60 text-xs font-semibold uppercase tracking-wider rounded-full text-white">
                          {post.category2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-snug mb-3">
                      {post.title}
                    </h3>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${post.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.role}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
                      {post.date}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ✅ FOOTER SECTION */}
        <FloatingMenuButton/>
        <Footer />
      </div>
    </>
  );
}
