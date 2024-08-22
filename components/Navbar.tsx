"use client";
import { navItems } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./toggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const heroSectionHeight = 550; // Adjust this value according to your hero section height

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isHeroSection = currentScrollY <= heroSectionHeight;

      if (currentScrollY > lastScrollY && !isHeroSection) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 inset-x-0 z-[5000] transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row items-center justify-center py-8">
        <div className="hidden md:flex max-w-fit mx-auto border rounded-full dark:bg-black-100 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-7 py-3 items-center justify-center space-x-6 border-white/[0.2]">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={
                "relative items-center flex space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-purple duration-150 hover:text-purple font-semibold"
              }
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="absolute top-5 right-20 md:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="flex bg-white dark:bg-black-100 flex-row items-center gap-1 px-3 py-[10px] rounded-full border-[0.5px] border-gray-400 dark:border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-center">
              <span className="font-semibold">Menu</span>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navItems.map((navItem: any, idx: number) => (
                <DropdownMenuItem key={idx} onClick={handleItemClick}>
                  <Link key={idx} href={navItem.link}>
                    <span>{navItem.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="absolute top-5 right-5 md:right-16 border-[0.5px] border-gray-400 dark:border-white rounded-xl">
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
