import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-white px-4 py-20">
      <div className="text-center max-w-2xl">
        <div className="mb-8 relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#E46231]/10"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#E46231]/10"></div>
          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] font-normal text-[#E46231] leading-none tracking-[-0.02em] relative">
            404
          </h1>
        </div>
        
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-normal leading-[1.35] tracking-[-0.01em] text-gray-900 mb-4 font-heading">
          Oops! Page Not Found
        </h2>
        
        <p className="text-[15px] sm:text-base leading-[1.7] tracking-[0.01em] text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have gone on a journey. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-[#333333] hover:bg-[#E46231] text-white rounded-full pl-6 pr-2 py-2 font-normal flex items-center gap-4 transition-colors"
          >
            Back to Home
            <span className="bg-white text-[#333333] rounded-full p-1.5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
          
          <Link
            href="/contact"
            className="border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white rounded-full px-6 py-2 font-normal transition-colors text-sm tracking-[0.01em]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
