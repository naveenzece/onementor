"use client";

import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
    return (
        <header className="sticky top-0 z-50 glass-effect border-b border-gray-200 shadow-md">
            <div className="container-professional">
                <div className="flex items-center justify-between py-6 md:py-7 lg:py-8">
                    
                    {/* Logo Only */}
                    <Link href="/" className="group">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-3 border-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Image 
                                src="/images/onementor.jpg"
                                alt="OneMentor Logo"
                                width={64} 
                                height={64} 
                                className="object-cover"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
                        <Link 
                            href="/about" 
                            className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors duration-200 text-base lg:text-lg"
                        >
                            About
                        </Link>
                        <Link 
                            href="/features" 
                            className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors duration-200 text-base lg:text-lg"
                        >
                            Features
                        </Link>
                        <Link 
                            href="/pricing" 
                            className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors duration-200 text-base lg:text-lg"
                        >
                            Pricing
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-5">
                        <Link 
                            href="/login" 
                            className="hidden sm:inline-flex px-6 py-3 text-[var(--primary)] font-semibold hover:bg-gray-100 rounded-lg transition-all duration-200"
                        >
                            Sign In
                        </Link>
                        <Link 
                            href="/signup" 
                            className="btn btn-primary px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
