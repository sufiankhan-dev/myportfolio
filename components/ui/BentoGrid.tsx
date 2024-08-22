"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackground";
import { motion } from "framer-motion";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundBeams } from "./background-beam";
import { Button } from "./button";
import { Download } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sufiancoding@gmail.com");
    setCopied(true);
  };

  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume-sufian.pdf";
    link.download = "Sufian-CV.pdf";
    link.click();

    setDownloaded(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4 border",
        "dark:border-white/[0.1] dark:bg-gradient-to-r dark:from-[rgba(4,7,29,1)] dark:to-[rgba(12,14,35,1)]",
        "bg-gradient-to-r from-white via-gray-100 to-gray-200 border-gray-200",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center h-full w-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 6 ? "text-white" : "dark:text-white text-gray-800"
          )}
        >
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-[470px] z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 1 && (
            <div>
              <BackgroundBeams />
            </div>
          )}

          {id === 1 && (
            <div className="flex justify-end cursor-pointer z-10">
              <Button
                className="px-6 md:px-10 flex flex-row items-center gap-x-2 text-base md:text-lg font-semibold mt-10"
                onClick={handleDownload}
              >
                {downloaded ? "Downloaded Successfully" : "Download CV"}
                {!downloaded && <Download className="w-5 h-5 md:w-6 md:h-6" />}
              </Button>
            </div>
          )}

          {id === 4 && (
            <div>
              {/* Light mode image */}
              <img
                src="/download.svg"
                alt="light mode image"
                className={cn(
                  "absolute dark:hidden object-cover object-center right-0 -bottom-5 md:-bottom-9 md:-right-3",
                  imgClassName
                )}
              />
              {/* Dark mode image */}
              <img
                src="/b4.svg"
                alt="dark mode image"
                className={cn(
                  "absolute hidden dark:block object-cover object-center right-0 -bottom-5 md:-bottom-9 md:-right-3",
                  imgClassName
                )}
              />
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["Sanity", "Next.js", "Typescript"].map((item, idx) => (
                  <span
                    className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-gray-300"
                    key={idx}
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center dark:bg-[#10132E] bg-gray-300" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center dark:bg-[#10132E] bg-gray-300" />
                {["MongoDB", "React.js", "JavaScript"].map((item, idx) => (
                  <span
                    className="py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-gray-300"
                    key={idx}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is copied" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="dark:!bg-[#161a31] !bg-white/[0.8] shadow-lg font-semibold"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
