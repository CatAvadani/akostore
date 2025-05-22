"use client";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-black text-white py-2 sm:py-3 px-4 text-center">
        <p className="text-xs sm:text-sm md:text-base font-medium">
          Free shipping on orders over 800 Kr • Spring Collection now available
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 text-white p-4">
          <div className="text-center bg-white/10 backdrop-blur-md px-4 sm:px-6 md:px-10 lg:px-36 py-4 sm:py-6 max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl rounded-xl md:rounded-2xl">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold mb-1 sm:mb-2 uppercase leading-tight">
              Spring Collection
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Discover the season&#39;s newest trends
            </p>
            <Button
              onClick={scrollToProducts}
              variant="default"
              className="px-4 sm:px-6 py-2 cursor-pointer text-sm sm:text-base"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex">
          {/* Left Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-1/2">
            <Image
              src="/images/fashion_img_2.jpg"
              alt="Fashion model in spring outfit"
              fill
              priority={true}
              quality={85}
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-1/2">
            <Image
              src="/images/fashion_img_1.png"
              alt="Spring fashion collection item"
              fill
              priority={true}
              quality={85}
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
