'use client';
import { ReactTyped } from 'react-typed';
import React from 'react';
import SwiperComponent from '@/components/SwiperComponent';

export default function Home() {
    // Need To Fix Home Banner Text

    // Typed JS Variables
    const reactTypedData = ['Donate', 'Foster', 'Adopt', 'Volunteer', 'Share'];

    return (
        <div className="bg-zinc-900">
            <div className="flex h-[calc(100svh)] w-full bg-[url(/dog-background-home.jpg)] bg-cover bg-center font-medium">
                <div className="mx-auto  mt-[30%] h-min w-min font-teko font-light text-[#F5F5F5]  sm:mx-0 sm:ml-4 ">
                    <div className="text-6xl  font-medium lg:text-5xl xl:text-8xl">
                        <div className="flex ">
                            <p className="whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
                                Help &nbsp;
                                <ReactTyped
                                    className="text-orange-500 "
                                    strings={reactTypedData}
                                    loop
                                    typeSpeed={35}
                                    backSpeed={35}
                                    backDelay={2000}
                                />
                            </p>
                        </div>
                        <div className="whitespace-nowrap">
                            Rocky Road Rescue
                        </div>
                    </div>
                    <p className="border-t-2 text-2xl lg:text-4xl ">
                        <span className="font-normal underline underline-offset-4">
                            Non Profit
                        </span>
                        , All Breed, Foster Based, and Volunteer Run
                    </p>
                </div>
            </div>
            <SwiperComponent />
        </div>
    );
}
