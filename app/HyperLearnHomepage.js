import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const router = useRouter();
  
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-cream text-gray-800'}`}>
      <Head>
        <title>LearnAI - Your AI Learning Assistant</title>
        <meta name="description" content="AI-powered learning assistant that explains, summarizes, and tests your knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-0 right-0 w-1/3 h-screen overflow-hidden pointer-events-none">
        <div className={`w-full h-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500' : 'bg-gradient-to-b from-orange-300 via-red-300 to-yellow-200'}`}></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold">LearnAI</div>
        <div className="flex items-center gap-6">
          <Link href="/chat">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-amber-50 hover:bg-amber-100'} transition-all`}
            >
              Try Now
            </motion.button>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:underline">About</span>
          </Link>
          <Link href="/pricing">
            <span className="cursor-pointer hover:underline">Pricing</span>
          </Link>
          <Link href="/signin">
            <span className="cursor-pointer hover:underline">Sign In</span>
          </Link>
          <motion.div
            className={`relative w-12 h-6 rounded-full cursor-pointer ${theme === 'dark' ? 'bg-gray-700' : 'bg-amber-200'}`}
            onClick={toggleTheme}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 rounded-full bg-white"
              animate={{ left: theme === 'dark' ? '4px' : 'calc(100% - 20px)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Learn Faster with AI
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your personal AI tutor that explains concepts, summarizes content, provides examples, and tests your knowledge through interactive quizzes.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/chat')}
                className={`px-6 py-3 rounded-lg font-bold shadow-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-500 hover:bg-amber-600'} transition-all`}
              >
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/pricing')}
                className={`px-6 py-3 rounded-lg font-bold shadow-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-amber-50 hover:bg-amber-100'} transition-all`}
              >
                See Plans
              </motion.button>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={`w-full aspect-video rounded-xl shadow-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-amber-50'}`}>
              <div className={`p-4 ${theme === 'dark' ? 'border-gray-700' : 'border-amber-200'} border rounded-t-xl`}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className={`mb-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
                  <p className="text-sm">How does photosynthesis work?</p>
                </div>
                <div className={`${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'} p-4 rounded-lg`}>
                  <p className="text-sm">Photosynthesis is the process by which plants convert light energy into chemical energy. It takes place in the chloroplasts, specifically in the grana and stroma, using chlorophyll pigments. The process has two main phases: the light-dependent reactions and the Calvin cycle...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="text-blue-500 text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Smart Explanations</h3>
            <p>Get clear, concise explanations for complex topics tailored to your level of understanding.</p>
          </div>
          <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="text-green-500 text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Document Analysis</h3>
            <p>Upload your study materials and get instant summaries, key points, and explanations.</p>
          </div>
          <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="text-purple-500 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Interactive Quizzes</h3>
            <p>Test your knowledge with AI-generated quizzes that adapt to your learning progress.</p>
          </div>
        </motion.div>
      </main>

      <footer className={`relative z-10 py-8 mt-12 text-center ${theme === 'dark' ? 'border-t border-gray-800' : 'border-t border-amber-200'}`}>
        <p>© 2025 LearnAI. All rights reserved.</p>
      </footer>
    </div>
  );
}