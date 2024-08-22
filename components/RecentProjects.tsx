"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Combined3DCard } from "./ui/3d-card";
import { projects } from "@/data";
import { Button } from "./ui/button";

const RecentProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const showMoreProjects = () => setVisibleProjects(projects.length);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 mt-10">
        {projects
          .slice(0, visibleProjects)
          .map(({ id, link, des, iconLists, img, title }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <Combined3DCard title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{
                      backgroundColor: "var(--project-card-bg)",
                    }}
                  >
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                          backgroundColor: "var(--icon-bg)",
                          borderColor: "var(--icon-border)",
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </Combined3DCard>
            </div>
          ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="flex justify-center">
          <Button
            onClick={showMoreProjects}
            className="px-6 py-3 rounded-full transition"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
