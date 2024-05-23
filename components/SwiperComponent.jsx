import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import '@styles/styles.css';

export default function SwiperComponent(props) {
    const options = { loop: true, align: 'start' };
    // Dog Data is here Temporarily For Now
    const ourDogs = [
        {
            name: 'Rigatoni',
            status: 'Accepting Applications In Advance',
            img: '/rigatoni-1.jpg',
            profile:
                'Rigatoni is boisterous, vocal, & runs head-long into adventure! He’s a brave boy who likes to play rough with everyone. His ideal home has structure & lots of positive training to keep his busy mind out of trouble! He does mouth quite a lot, so management with small children would be crucial.',
        },
        {
            name: 'Tortellini',
            status: 'Pending Adoption',
            img: '/tortellini-1.jpg',
            profile:
                'Tortellini is likely to be a big girl when fully grown, she’s confident, friendly, & playful. First of the litter to walk, run, & climb, there’s nothing that she can’t do! She knows what she wants & goes for it! She will do well in a home with lots of structure.',
        },
        {
            name: 'Linguine',
            status: 'Pending Adoption',
            img: '/linguine-1.jpg',
            profile:
                'Linguine is a very sweet boy. Playful & curious, he’s also very cuddly & loves being picked up & held. He’s good as gold for nail trims & brushes, so potential adopters should strive to keep reinforcing these skills as he will require frequent grooming as an adult. ',
        },
        {
            name: 'Gnocchi',
            status: 'Accepting Applications In Advance',
            img: '/gnocchi-1.jpg',
            profile:
                'Gnocchi is a cautious girl. She prefers to observe first before jumping into play time & new experiences. She will benefit from patient adopters who are committed to providing lots of slow, controlled opportunities for socializing and learning about the world.',
        },

        {
            name: 'Sparrow',
            status: 'Accepting Applications',
            img: '/sparrow-1.jpg',
            profile:
                'Sparrow is a doodle puppy with lots of energy to burn. He is experiencing his chewing phase and loves to put anything and everything in his mouth. This little guy loves to cuddle, so once he’s well exercised, you will be rewarded with lots of loving cuddles.',
        },
        {
            name: 'Bean',
            status: 'Pending Meet And Greet',
            img: '/bean-1.jpg',
            profile:
                'Meet Bean! This guy can initially be cautious in new situations but warms up very quickly and loves to say hi to everyone and anyone. Bean will lean into your legs and flop for a belly rub.',
        },
        {
            name: 'Phoenix',
            status: 'Accepting Applications',
            img: '/phoenix-1.jpg',
            profile:
                'Phoenix is a happy puppy who loves chasing birds, enjoys watching people play sports and will bark at her reflection in the mirror or windows. She is very sweet, loyal, funny and protective! Phoenix enjoys brain games and learning new tricks.',
        },
        {
            name: 'Falcon',
            status: 'Pending Adoption',
            img: '/falcon-1.jpg',
            profile:
                'Falcon is a 4 month old doodle who gets along really well with anyone he meets: dogs, cats, kids and strangers. He is very gentle with new people and will sit to observe before joining in. He is a very good boy.',
        },
        {
            name: 'Bear Paw',
            status: 'Accepting Applications',
            img: '/bear-paw-1.jpg',
            profile:
                'Meet Bear Paw! Originally pulled from a pound, this very friendly boy loves being near his foster people and is always up for a belly rub, even when his foster parents are trying to clip his nails!',
        },
        {
            name: 'Smiley',
            status: 'Accepting Applications',
            img: '/smiley-1.jpg',
            profile:
                'Meet Smiley! This retired sled dog is ready to find her forever home. She currently lives with cats, dogs, and older kids and does well with all. Smiley would do best living with another friendly dog in the home.',
        },
        {
            name: 'Eva',
            status: 'Paused',
            img: '/eva-1.jpg',
            profile:
                'Eva is a gentle soul. Her eyes will turn you into a puddle. Originally from a puppy mill (mom to pups Jack and Jill who were in our care), Eva is slowly learning about the world around her. She doesn’t love going for walks and is afraid of loud noises, like busses, outside.',
        },
        {
            name: 'Noodle',
            status: 'Pending Adoption',
            img: '/noodle-1.jpg',
            profile:
                'Meet Noodle the doodle! A puppy mill mamma, this lovely lady is slowly adjusting to her new life. She is now joyful greets her foster with enthusiastic tail wags and butt wiggles.',
        },
        {
            name: 'Loki',
            status: 'Accepting Applications For A Foster To Adopt',
            img: '/loki-1.jpg',
            profile:
                'I came into care as an owner surrender and I had trouble settling into foster care. I’m an anxious guy and have a fear of people that I don’t know. I take daily medication to help me with my anxiety. Once I am comfortable with you, I hope that we will be best friends.',
        },
        {
            name: 'Bear (Pungdol)',
            status: 'Accepting Applications',
            img: '/bear-1.jpg',
            profile:
                'Originally from a rescue in South Korea, Bear (formerly named Pungdol) is back with us after being adopted for a year. Adored by his fosters, Bear has settled in well and enjoys learning new tricks, going for walks, taking naps, and being brushed. ',
        },
        {
            name: 'Kevin',
            status: 'Accepting Applications',
            img: '/kevin-1.jpg',
            profile:
                'This delightful 10-year-old pup, is an absolute joy to have around. He welcomes you with a whole-body wag and a touch of vocal excitement whenever you’re in his presence. While he may have low energy at home, he transforms into a high-energy bundle of enthusiasm during walks.',
        },
        {
            name: 'Thunder',
            status: 'Pending Meet And Greet',
            img: '/thunder-1.jpg',
            profile:
                'Hey I’m Thunder! I was previously a sled dog who has been looking for his forever home for over a year. I’m loving my life now but I would love nothing more than to find my forever family. I know they are out there – someone looking for a sweet affectionate guy who likes to go on long daily walks and spend lazy weekends napping and cuddling together.',
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
        <div className="flex  w-full flex-col text-white md:h-[80vh]">
            <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1.5,
                    delay: 0.12,
                }}
                className="my-auto"
            >
                <div className="h-full w-full md:flex">
                    <div className="max-w-1/2  h-full w-full md:flex-1">
                        <div className="py-8">
                            <Image
                                src={ourDogs[currentSlideIndex].img}
                                className="mx-auto h-44 w-72 rounded-2xl object-cover  object-center drop-shadow-md md:h-72 md:w-96"
                                width={200}
                                height={200}
                                loading="eager"
                                alt={ourDogs[currentSlideIndex].name}
                            />
                        </div>
                    </div>
                    <div className="my-auto px-2 md:flex-1">
                        <h1 className="my-4 text-center text-3xl">
                            {ourDogs[currentSlideIndex].name}
                        </h1>
                        <p className="text-center">
                            {ourDogs[currentSlideIndex].profile}
                        </p>
                        <div className="my-4 flex w-full justify-center">
                            <button
                                type="button"
                                className="rounded-full border border-black bg-black px-12 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black"
                            >
                                Adopt
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="mb-3 mt-auto">
                <div className="embla">
                    <div
                        className="embla__viewport overflow-x-clip"
                        ref={emblaRef}
                    >
                        <div className="embla__container">
                            {ourDogs.map((element, index) => (
                                <div
                                    onClick={() => {
                                        setCurrentSlideIndex(index);
                                    }}
                                    className="embla__slide"
                                    key={index}
                                    onMouseEnter={toggleAutoplay}
                                    onMouseLeave={toggleAutoplay}
                                >
                                    <div className="embla__slide__number h-full transform rounded-2xl border-[12px] border-[#fef5d8] bg-[#fef5d8] drop-shadow-2xl transition-transform duration-300 hover:-translate-y-4">
                                        <div className="flex h-full w-full flex-col">
                                            {/*                                             <Image
                                                src={element.img}
                                                className="h-full max-h-[80%] w-full rounded-xl object-cover object-center"
                                                width={200}
                                                height={200}
                                                loading="eager"
                                                alt={element.name}
                                            />*/}

                                            <p className="my-auto text-center text-lg font-semibold text-black">
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
