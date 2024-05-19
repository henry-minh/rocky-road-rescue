"use client";
import { ReactTyped, Typed } from "react-typed";
import React from "react";

export default function Home() {
  const reactTypedData = ["Donate", "Foster", "Adopt", "Volunteer", "Share"];
  return (
    <div>
      <div className="font-medium w-full h-svh bg-[url('/dog-background-home.jpg')] bg-cover bg-center">
        <div className=" text-white pt-48 pl-4 ">
          <div className="w-min    font-light font-teko ">
            <div className="font-medium font-teko text-4xl lg:text-5xl xl:text-6xl">
              <div className="flex">
                <p className="whitespace-nowrap">
                  Help &nbsp;
                  <ReactTyped
                    className="text-red-600 "
                    strings={reactTypedData}
                    loop
                    typeSpeed={35}
                    backSpeed={35}
                    backDelay={2000}
                  />
                </p>
              </div>
              <div className="whitespace-nowrap">Support Local Rescue Dogs</div>
            </div>
            <p className="text-3xl mt-4 border-t-2 ">
              Rocky Road Rescue is a &nbsp;
              <span className="underline font-normal">Not-For-Profit</span>
              &nbsp; all-breed, foster-based, volunteer-run dog rescue in the
              Ottawa area.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen ">
        <div className="text-center">Adoptable Dogs</div>
      </div>
    </div>
  );
}
