import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-7 sm:pb-20 pt-12">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(255, 255, 255, 0.7)" // Lighten the spotlight in light mode
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="rgba(128, 0, 128, 0.7)" // Softer purple for light mode
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="rgba(0, 0, 255, 0.7)" // Softer blue for light mode
        />
      </div>

      <div className="h-screen w-full bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.05] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-left relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[55vw] flex flex-col lg:ml-24 justify-between">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-purple-600 dark:text-blue max-w-80">
            Dynamic Web Magic with Next.js
            </h2> */}
          <img
            src="/sufian.png"
            alt="my image"
            className="h-16 w-16 rounded-full flex object-cover items-start"
          />

          {/* <TextGenerateEffect
            className="text-left text-[40px] md:text-5xl lg:text-6xl text-gray-800 dark:text-white"
            words="Transforming Concepts into Seamless User Experiences"
          /> */}
          <h1
            className="pt-8 tracking-tight text-[40px] md:text-5xl lg:text-5xl text-gray-800 dark:text-white font-bold"
            style={{ lineHeight: "1.2em" }}
          >
            Next.js & <span className="text-purple">React developer</span>, and
            AI enthusiast.
          </h1>

          <p className="text-left mt-5 mb-7 text-sm md:text-xl lg:text-base text-gray-600 dark:text-gray-400">
            I&apos;m Sufian, a web developer and AI enthusiast based in
            Pakistan. I specialize in Next.js and React, and I&apos;m on a
            mission to create fast, responsive websites that stand out. I&apos;m
            also deeply passionate about Artificial Intelligence, continuously
            learning and exploring how AI can shape the future of technology.
          </p>

          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="bg-purple-600 dark:text-white text-gray-900 font-semibold hover:bg-purple-700"
            />
          </a> */}
          <div className="flex flex-row gap-x-6 text-2xl text-gray-500">
            <Link
              href={"https://linkedin.com/in/sufiankhan108"}
              target="_blank"
              className="hover:text-gray-800"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/sufiankhan-dev"
              target="_blank"
              className="hover:text-gray-800"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://x.com/sufiankhan_dev"}
              className="hover:text-gray-800"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"https://www.instagram.com/_sufianzai/"}
              className="hover:text-gray-800"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
