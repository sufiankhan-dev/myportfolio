"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href || "/"}
    >
      <div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          initial={{ rotateX: 0, scale: 1 }}
          animate={{
            rotateX: isHovered ? 40 : 0,
            scale: isHovered ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 150 }}
          className="p-4 flex justify-start items-start rounded-2xl shadow-md border border-white/10 transition-all duration-300"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </motion.div>
      </div>
      {title && (
        <PinPerspective title={title} href={href} isHovered={isHovered} />
      )}
    </Link>
  );
};

export const PinPerspective = ({
  title,
  href,
  isHovered,
}: {
  title?: string;
  href?: string;
  isHovered: boolean;
}) => {
  return (
    <motion.div
      className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition-opacity duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-40"></span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
