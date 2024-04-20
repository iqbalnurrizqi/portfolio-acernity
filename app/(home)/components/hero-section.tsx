import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function HeroSection() {

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:flex-row items-center justify-between p-3">
      <div className="space-y-10 text-center lg:text-left ">
        <h1 className="text-4xl md:text-7xl font-bold ">

          Nice To Meet You 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Iqbal Nurrizqi"}
          </span>
        </h1>
        <p className="w-full text-lg text-gray-300 xl:w-1/2">
          {
            "based In Indonesia, I'm a Fullstack Developer, I'm passionate about building software that improves the lives of those around me. "
          }
        </p>
        <Link
          href={"mailto:iqbalnurrizqi2@gmail.com"}
          className="inline-block group cursor-pointer"
        >
          <Title title="  Contact me 📬" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-50"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>Available for Work 💼</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
