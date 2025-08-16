"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CountdownUnitProps {
  value: string;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => (
  <div
    className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex flex-col justify-center items-center bg-contain bg-no-repeat bg-center"
    style={{ backgroundImage: "url('/images/count-bg.png')" }}
  >
    <span
      className="text-xl sm:text-2xl lg:text-4xl font-bold"
      style={{ color: "var(--brown)" }}
    >
      {value}
    </span>
    <span
      className="text-xs sm:text-sm lg:text-base mt-1 font-bold"
      style={{ color: "var(--brown-dark)" }}
    >
      {label}
    </span>
  </div>
);

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  const [targetDate] = useState(() => {
    const date = new Date("2025-06-29T23:59:59");
    return date;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const animationTimeout = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div
      className="relative w-full py-12 md:py-20 text-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-enter-the-contest.png')",
        fontFamily: "var(--font-montserrat-alternates)",
      }}
    >
      <div
        className={`absolute -left-10 md:-left-20 bottom-0 z-10 transition-all duration-1000 ease-out opacity-20 md:opacity-20 lg:opacity-80 ${
          isAnimated ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          src="/images/left-cho-enter-the-contest.png"
          alt="Chocolate treats"
          width={350}
          height={350}
          objectFit="contain"
        />
      </div>
      <div
        className={`hidden sm:block absolute right-4 md:right-16 bottom-8 z-10 transition-all duration-1000 ease-out opacity-20 md:opacity-20 lg:opacity-80 ${
          isAnimated ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Image
          src="/images/right-enter-the-contest.png"
          alt="Chocolate chip cookie"
          width={250}
          height={250}
          objectFit="contain"
        />
      </div>

      <div className="relative z-20 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "var(--brown)" }}
        >
          Enter the Contest
        </h2>
        <p
          className="mt-3 text-sm md:text-base font-semibold max-w-2xl mx-auto"
          style={{ color: "var(--brown-dark)" }}
        >
          Submit your favorite recipe, and it might be listed on our website!
          Winner gets featured on our blog!
        </p>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 mt-8 md:mt-12">
          <CountdownUnit
            value={String(timeLeft.days || "0").padStart(2, "0")}
            label="Days"
          />
          <CountdownUnit
            value={String(timeLeft.hours || "0").padStart(2, "0")}
            label="Hours"
          />
          <CountdownUnit
            value={String(timeLeft.minutes || "0").padStart(2, "0")}
            label="Minutes"
          />
          <CountdownUnit
            value={String(timeLeft.seconds || "0").padStart(2, "0")}
            label="Seconds"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full border-b-4 border-dotted"
        style={{ borderColor: "var(--gold)" }}
      ></div>
    </div>
  );
};

export default CountdownTimer;
