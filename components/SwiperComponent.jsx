import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import '@styles/styles.css';

import EmblaCarousel from 'embla-carousel';

export default function SwiperComponent(props) {
    // const { slides, options } = props;
    // const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ stopOnInteraction: false, stopOnFocusIn: true })]);

    // Embla Carousel Variables
    const options = { loop: true, align: 'start' };
    const SLIDE_COUNT = 20;
    const ourDogs = [
        {
            name: 'Rigatoni',
            status: 'Accepting Applications In Advance',
            img: '/rigatoni-1.jpg',
        },
        {
            name: 'Tortellini',
            status: 'Pending Adoption',
            img: '/tortellini-1.jpg',
        },
        {
            name: 'Linguine',
            status: 'Pending Adoption',
            img: '/linguine-1.jpg',
        },
        {
            name: 'Gnocchi',
            status: 'Accepting Applications In Advance',
            img: '/gnocchi-1.jpg',
        },
        {
            name: 'Penne',
            status: 'Accepting Applications In Advance',
            img: '/penne-1.jpg',
        },
        {
            name: 'Sparrow',
            status: 'Accepting Applications',
            img: '/sparrow-1.jpg',
        },
        {
            name: 'Bean',
            status: 'Pending Meet And Greet',
            img: '/bean-1.jpg',
        },
        {
            name: 'Phoenix',
            status: 'Accepting Applications',
            img: '/phoenix-1.jpg',
        },
        {
            name: 'Falcon',
            status: 'Pending Adoption',
            img: '/falcon-1.jpg',
        },
        {
            name: 'Bear Paw',
            status: 'Accepting Applications',
            img: '/bear-paw-1.jpg',
        },
        {
            name: 'Smiley',
            status: 'Accepting Applications',
            img: '/smiley-1.jpg',
        },
        { name: 'Eva', status: 'Paused', img: '/eva-1.jpg' },
        {
            name: 'Noodle',
            status: 'Pending Adoption',
            img: '/noodle-1.jpg',
        },
        {
            name: 'Loki',
            status: 'Accepting Applications For A Foster To Adopt',
            img: '/loki-1.jpg',
        },
        {
            name: 'Bear (Pungdol)',
            status: 'Accepting Applications',
            img: '/bear-1.jpg',
        },
        {
            name: 'Kevin',
            status: 'Accepting Applications',
            img: '/kevin-1.jpg',
        },
        {
            name: 'Thunder',
            status: 'Pending Meet And Greet',
            img: '/thunder-1.jpg',
        },
    ];
    // const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ speed: 0.5 }),
    ]);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play;
        playOrStop();
    }, [emblaApi]);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const logSelectedScrollSnap = useCallback((emblaApi) => {
        setCurrentSlideIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;

        if (emblaApi) emblaApi.on('slidesInView', logSelectedScrollSnap);
        if (!autoScroll) return;

        setIsPlaying(autoScroll.isPlaying());
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi, logSelectedScrollSnap]);
    const test = '/husky-background.jpg';
    return (
        <div className="flex h-svh w-full flex-col ">
            <div className="mt-4 text-center font-teko text-6xl text-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
                ADOPTABLES
            </div>
            <div className="mx-auto h-full">
                <p>{ourDogs[currentSlideIndex].name}</p>
            </div>

            <div className="mb-12 mt-auto">
                <div className="embla">
                    <div
                        className="embla__viewport overflow-x-clip"
                        ref={emblaRef}
                    >
                        <div className="embla__container   ">
                            {ourDogs.map((element, index) => (
                                <div
                                    onClick={() => {
                                        setCurrentSlideIndex(index);
                                    }}
                                    className="embla__slide  "
                                    key={index}
                                    onMouseEnter={toggleAutoplay}
                                    onMouseLeave={toggleAutoplay}
                                >
                                    <div className="embla__slide__number h-full transform rounded-2xl  border-l-[12px] border-r-[12px] border-t-[12px] border-[#fafaf0] bg-[#fafaf0] shadow-xl outline  outline-1 transition-transform duration-300 hover:-translate-y-4 ">
                                        <div className=" flex h-full w-full flex-col ">
                                            <Image
                                                src={element.img}
                                                className=" h-full max-h-40 w-full rounded-xl object-cover object-center  "
                                                width={200}
                                                height={200}
                                                loading="eager"
                                                alt={element.name}
                                            ></Image>
                                            <p className="my-auto  text-center text-[1.125rem]  font-semibold text-black">
                                                {element.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
