"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiFirebase,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Firebase",
      Icon: SiFirebase,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        title="Skills 🗡️"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
