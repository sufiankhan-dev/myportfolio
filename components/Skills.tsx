import { SkillsIcons } from "@/data";
import React from "react";

const Skills = () => {
  return (
    <div className="py-14 w-full" id="skills">
      <h1 className="heading">
        My Skills - <span className="text-purple">Technologies I use</span>
      </h1>

      <div className="my-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto md:px-8 justify-center">
        {SkillsIcons.map((item, idx) => (
          <div
            key={idx}
            className="relative group flex items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="absolute inset-0 bg-gray-200 dark:bg-black-200 opacity-0 group-hover:opacity-90 flex items-center justify-center rounded-lg transition-all duration-300">
              <span className="text-sm font-bold uppercase text-gray-800 dark:text-gray-200">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
