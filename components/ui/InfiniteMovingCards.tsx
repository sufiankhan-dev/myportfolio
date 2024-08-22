"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    profile: any;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    // Start animation on mount
    setStart(true);
  }, []);

  const getDirection = () => {
    return direction === "left" ? "forwards" : "reverse";
  };

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      default:
        return "80s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={
        {
          "--animation-direction": getDirection(),
          "--animation-duration": getSpeed(),
        } as React.CSSProperties
      }
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.concat(items).map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 p-8 md:p-16 md:w-[60vw] bg-gray-50 border-gray-300 dark:bg-[#04071D] dark:border-gray-700"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-gray-900 dark:text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-row gap-1">
                  <div className="me-3">
                    <img
                      src={item.profile}
                      alt="profile"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl leading-[1.6] text-gray-900 dark:text-gray-200 font-bold">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-600 dark:text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
