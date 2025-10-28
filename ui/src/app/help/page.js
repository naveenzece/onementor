"use client";

import MainHeader from "@/components/Header/mainHeader";
import Footer from "@/components/Footer/footer";
import Image from "next/image";
import { useState } from "react";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'account', name: 'Account & Profile', icon: '👤' },
    { id: 'booking', name: 'Booking Sessions', icon: '📅' },
    { id: 'coaching', name: 'Coaching', icon: '🎯' },
    { id: 'payment', name: 'Payment & Billing', icon: '💳' },
    { id: 'technical', name: 'Technical Support', icon: '🔧' }
  ];

  const helpArticles = [
    {
      id: 1,
      title: "How to create your account",
      category: "getting-started",
      content: "Learn how to sign up and create your OneMentor account in just a few simple steps.",
      popular: true
    },
    {
      id: 2,
      title: "How to book your first session",
      category: "booking",
      content: "Step-by-step guide to finding and booking your first coaching session.",
      popular: true
    },
    {
      id: 3,
      title: "Setting up your profile",
      category: "account",
      content: "Complete your profile to get the best matches with coaches.",
      popular: false
    },
    {
      id: 4,
      title: "Understanding session types",
      category: "coaching",
      content: "Learn about the different one-on-one coaching session durations available on OneMentor.",
      popular: false
    },
    {
      id: 5,
      title: "Payment methods and billing",
      category: "payment",
      content: "Information about accepted payment methods and billing cycles.",
      popular: false
    },
    {
      id: 6,
      title: "Troubleshooting video issues",
      category: "technical",
      content: "Common solutions for video and audio problems during sessions.",
      popular: true
    },
    {
      id: 7,
      title: "How to become a coach",
      category: "coaching",
      content: "Requirements and process for becoming a verified coach on OneMentor.",
      popular: false
    },
    {
      id: 8,
      title: "Managing your schedule",
      category: "booking",
      content: "Tips for managing your coaching schedule and availability.",
      popular: false
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <MainHeader />

      <main className="flex-grow container-professional py-16 md:py-20 lg:py-24 fade-in">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-8">
            <Image 
              src="/images/onementor.jpg"
              alt="OneMentor"
              width={120}
              height={120}
              className="rounded-full border-4 border-[var(--primary)] shadow-xl mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Help Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to your questions and get the support you need
          </p>
        </div>

        {/* Search Section */}
        <div className="card spacing-generous mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Search Help Articles</h2>
            <p className="text-gray-600">Find answers to common questions and troubleshooting guides</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles..."
                className="input-professional pr-12"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`card p-4 text-center transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpArticles.filter(article => article.popular).map((article) => (
              <div key={article.id} className="card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📖</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {article.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All Help Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
          </h2>
          
          {filteredArticles.length > 0 ? (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div key={article.id} className="card group hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {article.content}
                      </p>
                    </div>
                    <div className="ml-4">
                      <button className="btn btn-secondary px-4 py-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card spacing-generous text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="card spacing-generous text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary btn-lg px-8 py-4">
              Contact Support
            </a>
            <a href="mailto:support@onementor.com" className="btn btn-secondary btn-lg px-8 py-4">
              Email Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
