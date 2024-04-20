import React from "react";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "Project 1",
      tech: [SiReact, SiNextdotjs, SiTailwindcss],
      Link: "https://github.com",
      cover: "/gambar1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Project 2",
      tech: [SiReact, SiNextdotjs, SiTailwindcss],
      Link: "https://github.com",
      cover: "/gambar2.png",
      background: "bg-green-500",
    },
    {
      title: "Project 2",
      tech: [SiReact, SiNextdotjs, SiTailwindcss],
      Link: "https://github.com",
      cover: "/gambar2.png",
      background: "bg-yellow-500",
    },
    {
      title: "Project 2",
      tech: [SiReact, SiNextdotjs, SiTailwindcss],
      Link: "https://github.com",
      cover: "/gambar2.png",
      background: "bg-red-500",
    },
  ];
  return (

      <div className="py-10 p-5 sm:p-0">
        <Title
          title="Projects 🚀"
          className="flex flex-col justify-center items-center text-center rotate-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10 p-0 sm:p-10">
          {projects.map((project, index) => {
            return (
              <Link href={project.Link} key={index}>
                <div className={cn("p-5 rounded-md", project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5">
                      <h1 className="font-bold text-2xl">{project.title}</h1>
                      <div className="flex gap-5 mt-2 ">
                        {project.tech.map((Tech, index) => {
                          return <Tech key={index} className="w-8 h-8" />;
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

  );
}
