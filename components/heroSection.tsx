"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

// Loading skeleton component
const ImageSkeleton = ({ className }: { className?: string }) => (
  <div
    className={`bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 animate-pulse ${className}`}
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 2s infinite",
      }}
    />
  </div>
);

// Individual image with loading state
const HeroImage = ({
  src,
  alt,
  className = "",
  priority = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && <ImageSkeleton className="absolute inset-0" />}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-gray-600 text-center">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        className={`object-cover transition-all duration-500 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 50vw"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

const HeroSection = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  const scrollToProducts = () => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Trigger content animation after a short delay
  useState(() => {
    const timer = setTimeout(() => setContentLoaded(true), 100);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col w-full">
      {/* Promotional Banner */}
      <div className="w-full bg-black text-white py-2 sm:py-3 px-4 text-center">
        <p className="text-xs sm:text-sm md:text-base font-medium">
          Free shipping on orders over 800 Kr • Spring Collection now available
        </p>
      </div>

      {/* Hero Caption Overlay */}
      <div className="relative">
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 text-white p-4 transition-all duration-700 ease-out ${
            contentLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center bg-white/10 backdrop-blur-md px-4 sm:px-6 md:px-10 lg:px-36 py-4 sm:py-6 max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl rounded-xl md:rounded-2xl border border-white/20">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold mb-1 sm:mb-2 uppercase leading-tight">
              Spring Collection
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-90">
              Discover the season&#39;s newest trends
            </p>
            <Button
              onClick={scrollToProducts}
              variant="default"
              className="px-4 sm:px-6 py-2 cursor-pointer text-sm sm:text-base hover:scale-105 transition-transform duration-200"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex">
          {/* Left Image */}
          <HeroImage
            src="/images/fashion_img_2.jpg"
            alt="Fashion model in spring outfit"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-1/2"
            priority={true}
          />

          {/* Right Image */}
          <HeroImage
            src="/images/fashion_img_1.png"
            alt="Spring fashion collection item"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-1/2"
            priority={true}
          />
        </div>
      </div>

      {/* Add shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
