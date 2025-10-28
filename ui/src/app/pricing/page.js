"use client";

import MainHeader from "@/components/Header/mainHeader";
import Footer from "@/components/Footer/footer";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pay only for the sessions you book. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Pricing Overview */}
        <div className="card spacing-generous mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Our Pricing Works</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            OneMentor offers two types of coaching: AI-powered coaching is completely free, while human coach sessions are paid based on the individual coach's pricing. 
            You only pay when you book a session with a human coach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Coach</h3>
              <p className="text-gray-600">Completely free AI-powered coaching available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Human Coach</h3>
              <p className="text-gray-600">Expert human coaches with personalized pricing per session</p>
            </div>
          </div>
        </div>

        {/* Session Pricing */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Coaching Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* AI Coach - Free */}
            <div className="card text-center group hover:scale-105 transition-transform duration-300 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Always Free
                </span>
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Coach</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">Free</div>
                <p className="text-gray-600">Available 24/7</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Instant responses</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">AI-powered insights</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Personalized recommendations</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Progress tracking</span>
                </div>
              </div>
              
              <Link href="/dashboard/userdashboard/userAi" className="btn bg-green-500 hover:bg-green-600 text-white w-full">
                Try AI Coach
              </Link>
            </div>

            {/* Human Coach - Paid */}
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Human Coach</h3>
                <div className="text-4xl font-bold text-[var(--primary)] mb-2">₹1000+</div>
                <p className="text-gray-600">per session</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Expert human guidance</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Personalized coaching</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Video call sessions</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Flexible scheduling</span>
                </div>
              </div>
              
              <Link href="/dashboard/userdashboard/coachdiscovery" className="btn btn-primary w-full">
                Browse Coaches
              </Link>
            </div>
          </div>
        </div>


        {/* Refund Policy */}
        <div className="card spacing-generous mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Refund Policy</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Our refund policy applies to human coach sessions only. AI Coach interactions are free and don't require refunds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24+ Hours Notice</h3>
              <p className="text-gray-600 mb-2">Full refund</p>
              <p className="text-sm text-gray-500">Cancel or reschedule with full refund</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Less than 24 Hours</h3>
              <p className="text-gray-600 mb-2">50% refund</p>
              <p className="text-sm text-gray-500">Partial refund for last-minute cancellations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Show</h3>
              <p className="text-gray-600 mb-2">No refund</p>
              <p className="text-sm text-gray-500">Missed sessions without notice</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Issues</h3>
            <p className="text-gray-600">
              If technical problems prevent your session from taking place due to issues on our end, 
              you'll receive a full refund and we'll help you reschedule at no additional cost.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="card spacing-generous mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Accepted Payment Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">💳</div>
              <p className="text-sm font-semibold text-gray-700">Credit Cards</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">🏦</div>
              <p className="text-sm font-semibold text-gray-700">Debit Cards</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">📱</div>
              <p className="text-sm font-semibold text-gray-700">PayPal</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <div className="text-2xl mb-2">🏧</div>
              <p className="text-sm font-semibold text-gray-700">Bank Transfer</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Try our free AI Coach for instant guidance, or connect with expert human coaches for personalized mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn btn-primary btn-lg px-8 py-4">
              Get Started
            </Link>
            <Link href="/dashboard/userdashboard/userAi" className="btn bg-green-500 hover:bg-green-600 text-white btn-lg px-8 py-4">
              Try AI Coach
            </Link>
            <Link href="/dashboard/userdashboard/coachdiscovery" className="btn btn-secondary btn-lg px-8 py-4">
              Browse Human Coaches
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
