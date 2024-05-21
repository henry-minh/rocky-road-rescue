import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import '@styles/styles.css';
const SwiperComponent = (props) => {
    // const { slides, options } = props;
    // const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ stopOnInteraction: false, stopOnFocusIn: true })]);

    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 0.5 }),
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

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        setIsPlaying(autoScroll.isPlaying());
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);

    return (
        <div className="embla   ">
            <div className="embla__viewport overflow-x-clip" ref={emblaRef}>
                <div className="embla__container   ">
                    {slides.map((index) => (
                        <div
                            className="embla__slide  "
                            key={index}
                            onMouseEnter={toggleAutoplay}
                            onMouseLeave={toggleAutoplay}
                        >
                            <div className="embla__slide__number transform  rounded-xl border-l-[12px] border-r-[12px] border-t-[12px] border-[#fafaf0]   bg-[#fafaf0] transition-transform duration-300 hover:-translate-y-4 ">
                                <div className=" h-full  w-full text-center">
                                    <img
                                        src="/husky-background.jpg"
                                        className="h-11/12  w-full rounded-xl object-cover align-text-bottom"
                                    ></img>
                                    <p className="mt-auto font-normal text-black">
                                        {index} Dexter
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SwiperComponent;