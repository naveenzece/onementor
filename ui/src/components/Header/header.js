"use client";

import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="bg-[#0A3551] py-6 md:py-7 lg:py-8 sticky top-0 shadow-lg w-full z-50">
                <div className="container-professional">
                    <div className="flex flex-row justify-between items-center">
                        
                        {/* ✅ Logo Only */}
                        <div>
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-3 border-white shadow-lg transition-transform duration-300 hover:scale-110">
                                <Image 
                                    src="/images/onementor.jpg"
                                    alt="OneMentor Logo"
                                    width={64} 
                                    height={64} 
                                    className="object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}
