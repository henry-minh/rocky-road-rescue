"use client";
import { ReactTyped, Typed } from "react-typed";
import React, { useRef, useState } from "react";
import SwiperComponent from "@/components/SwiperComponent";
import useEmblaCarousel from "embla-carousel-react";
export default function Home() {
  const OPTIONS = { loop: true, align: "start" };
  const SLIDE_COUNT = 20;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const reactTypedData = ["Donate", "Foster", "Adopt", "Volunteer", "Share"];

  return (
    <div className="bg-zinc-900">
      <div className="font-medium flex w-full h-[calc(100svh)] pt-[88px] bg-[url(/dog-background-home.jpg)] bg-cover bg-center">
        <div className="w-min  text-[#F5F5F5] my-auto font-light font-teko ">
          <div className="font-medium  text-4xl lg:text-5xl xl:text-6xl">
            <div className="flex">
              <p className="whitespace-nowrap">
                Help &nbsp;
                <ReactTyped className="text-red-600 " strings={reactTypedData} loop typeSpeed={35} backSpeed={35} backDelay={2000} />
              </p>
            </div>
            <div className="whitespace-nowrap">Rocky Road Rescue</div>
          </div>
          <p className="text-2xl  border-t-2 ">
            Rocky Road Rescue is a &nbsp;
            <span className="underline font-normal underline-offset-4">Not-For-Profit</span>
            &nbsp; all-breed, foster-based, volunteer-run dog rescue in the Ottawa area.
          </p>
        </div>
      </div>
      <div className="w-full h-svh flex flex-col ">
        <div className="text-center text-6xl font-teko mt-4">Adoptables</div>
        <div className="h-full"></div>
        <div className="mt-auto mb-4">
          <SwiperComponent slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}
