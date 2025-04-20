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
      {/* Promotional Banner */}
      <div className="w-full bg-black text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          FREE SHIPPING ON ORDERS OVER 800 KR • SPRING COLLECTION NOW AVAILABLE
        </p>
      </div>

      {/* Hero Caption Overlay */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center bg-white/40 backdrop-blur-2xl px-8 py-6  max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Spring Collection
            </h1>
            <p className="text-lg mb-4">
              Discover the season&#39;s newest trends
            </p>
            <Button
              onClick={scrollToProducts}
              variant="default"
              className="px-6 py-2 rounded-none cursor-pointer"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex">
          <div className="h-[500px] w-[50%]">
            <Image
              src="/images/fashion_img_2.jpg"
              alt="Fashion model in spring outfit"
              width={800}
              height={1200}
              priority={true}
              quality={80}
              className="w-full h-full object-cover"
              loading="eager"
              sizes="50vw"
            />
          </div>
          <div className="h-[500px] w-[50%]">
            <Image
              src="/images/fashion_img_1.png"
              alt="Spring fashion collection item"
              width={800}
              height={1200}
              priority={true}
              quality={80}
              className="w-full h-full object-cover"
              loading="eager"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
