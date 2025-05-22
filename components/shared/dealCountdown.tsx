"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

// Static target date (replace with desired date)
const TARGET_DATE = new Date("2025-06-20T00:00:00");

// Function to calculate the time remaining
const calculateTimeRemaining = (targetDate: Date) => {
  const currentTime = new Date();
  const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0);
  return {
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  };
};

const DealCountdown = () => {
  const [time, setTime] = useState<ReturnType<typeof calculateTimeRemaining>>();

  useEffect(() => {
    // Calculate initial time on client
    setTime(calculateTimeRemaining(TARGET_DATE));

    const timerInterval = setInterval(() => {
      const newTime = calculateTimeRemaining(TARGET_DATE);
      setTime(newTime);

      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  if (!time) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 my-10 md:my-20 px-4">
        <div className="flex flex-col gap-2 justify-center order-2 lg:order-1">
          <h3 className="text-2xl md:text-3xl font-bold">
            Loading Countdown...
          </h3>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full max-w-md aspect-[3/2] bg-gray-200 animate-pulse rounded-lg" />
        </div>
      </section>
    );
  }

  if (
    time.days === 0 &&
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0
  ) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 my-10 md:my-20 px-4">
        <div className="flex flex-col gap-4 justify-center order-2 lg:order-1">
          <h3 className="text-2xl md:text-3xl font-bold">Deal Has Ended</h3>
          <p className="text-sm md:text-base text-gray-600">
            This deal is no longer available. Check out our latest promotions!
          </p>
          <div className="text-center lg:text-left">
            <Button asChild>
              <Link href="/search">View Products</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-full max-w-md aspect-[3/2]">
            <Image
              src="/images/sample-products/p4-3.jpg"
              alt="Promotional product - deal ended"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6  my-10 md:my-20 px-4 ">
      <div className="flex flex-col gap-4 justify-center order-2 lg:order-1">
        <h3 className="text-2xl md:text-3xl font-bold">Deal Of The Month</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Get ready for a shopping experience like never before with our Deals
          of the Month! Every purchase comes with exclusive perks and offers,
          making this month a celebration of savvy choices and amazing deals.
          Don&apos;t miss out! 🎁🛒
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
        <div className="text-center lg:text-left">
          <Button asChild>
            <Link href="/search">View Products</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center order-1 lg:order-2">
        <div className="relative w-full max-w-md aspect-[1/1]">
          <Image
            src="/images/sample-products/p4-3.jpg"
            alt="Deal of the month promotional product"
            fill
            className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className="p-2 sm:p-4 w-full text-center bg-gray-50 rounded-lg">
    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
      {value}
    </p>
    <p className="text-xs sm:text-sm text-gray-600">{label}</p>
  </li>
);

export default DealCountdown;
