"use client";

import Link from "next/link";

export default function Card({ title, icon, link, description }) {
  const content = (
    <div className="card h-full p-6 bg-white hover:bg-gradient-to-br hover:from-[var(--primary)] hover:to-[var(--secondary)] cursor-pointer transition-all duration-300 group">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-4 group-hover:bg-white transition-all duration-300">
          <div className="text-white group-hover:text-[var(--primary)] transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors">
            {description}
          </p>
        )}
        <div className="mt-auto pt-4 flex items-center text-[var(--primary)] group-hover:text-white font-medium">
          <span className="text-sm">Access now</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
