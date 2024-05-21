'use client';
// export default function Header({ children }) {
//   return (
//     <div>
//       <p>header</p>
//       {children}
//     </div>
//   );
// }

import {
    PopoverGroup,
    PopoverPanel,
    DialogPanel,
    PopoverButton,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    ClipboardDocumentListIcon,
    QuestionMarkCircleIcon,
    UserGroupIcon,
    HomeIcon,
    HomeModernIcon,
} from '@heroicons/react/24/outline';

import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from '@heroicons/react/20/solid';

const adopt = [
    {
        name: 'Adoption Proccess',
        description:
            'Everything you need to know when adopting with Rocky Road Rescue',
        href: '/adoption-process',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Adoptable Dogs',
        description: 'Meet our adoptable dogs!',
        href: '/adoptable-dogs',
        icon: HomeIcon,
    },
    {
        name: 'Adoption Application',
        description: 'Fill out our adoption application form!',
        href: '/adoption-application',
        icon: ClipboardDocumentListIcon,
    },
    //   { name: "Foster Application", description: "Your customers’ data will be safe and secure", href: "#", icon: FingerPrintIcon },
    //   { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
    //   { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];
const foster = [
    {
        name: 'Why Foster',
        description:
            'Fostering a dog means you get to help give a dog a second chance at life.',
        href: '/why-foster',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Dogs Looking For Fosters',
        description: 'Meet our Dogs looking for a temporary home.',
        href: '/foster-dogs',
        icon: HomeModernIcon,
    },
    {
        name: 'Foster Application',
        description:
            'Are you a good fit? Fill out our foster application form!',
        href: '/foster-application',
        icon: ClipboardDocumentListIcon,
    },
    //   { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
    //   { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];
const volunteer = [
    {
        name: 'Volunteer With Rocky Road Rescue',
        description: 'Interested in volunteering with Rocky Road Rescue?',
        href: '/volunteer-information',
        icon: UserGroupIcon,
    },
    {
        name: 'Volunteer Application',
        description: 'Fill out our volunteer application form!',
        href: '/volunteer-application',
        icon: ClipboardDocumentListIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <header className="h-[80px]  w-full">
                <nav
                    className="mx-auto flex items-center gap-4  bg-zinc-900 lg:px-8"
                    aria-label="Global"
                >
                    <a href="/" className=" flex-shrink-0 ">
                        <img
                            className="h-20 w-full rounded-full p-2"
                            src={'/rrr-logo.jpg'}
                            alt=""
                        />
                    </a>
                    <a
                        href="/"
                        className="font-semi-bold whitespace-nowrap font-teko text-2xl font-thin leading-6 text-[#fff] "
                    >
                        <p>ROCKY ROAD</p>
                        <p>RESCUE</p>
                    </a>
                    <span className="mx-4 hidden h-16 border lg:block"></span>
                    <div className="ml-auto flex lg:hidden">
                        <button
                            type="button"
                            className="  inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                className="h-10 w-10 text-white"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-4 ">
                        <a
                            href="https://www.facebook.com/RockyRoadRescueCanada/events?ref=page_internal"
                            target="_none"
                            className="font-semi-bold group text-lg leading-6 text-[#fff]  transition duration-300   "
                        >
                            Events
                            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                        </a>

                        <Popover className="relative ">
                            <div className="">
                                <PopoverButton className=" font-semi-bold group items-center text-lg leading-6 text-[#fff]  outline-none transition duration-300">
                                    <div className="flex">
                                        Adopt
                                        <ChevronDownIcon
                                            className="h-6 w-6 flex-none text-[#fff] "
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                                </PopoverButton>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="z-100 absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border border-black bg-white ">
                                    <div className="p-4">
                                        {adopt.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg hover:bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <a
                                                        href={item.href}
                                                        className="block font-semibold text-gray-900"
                                                    >
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <PopoverButton className=" font-semi-bold group items-center text-lg leading-6 text-[#fff]  outline-none transition duration-300">
                                <div className="flex">
                                    Foster
                                    <ChevronDownIcon
                                        className="h-6 w-6 flex-none text-[#fff] "
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                            </PopoverButton>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="z-100 absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border border-black bg-white ">
                                    <div className="p-4">
                                        {foster.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg hover:bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <a
                                                        href={item.href}
                                                        className="block font-semibold text-gray-900"
                                                    >
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </Popover>
                        <Popover className="relative">
                            <PopoverButton className=" font-semi-bold group items-center text-lg leading-6 text-[#fff]  outline-none transition duration-300">
                                <div className="flex">
                                    Volunteer
                                    <ChevronDownIcon
                                        className="h-6 w-6 flex-none text-[#fff] "
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                            </PopoverButton>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="z-100 absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border border-black bg-white ">
                                    <div className="p-4">
                                        {volunteer.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg hover:bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-orange-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <a
                                                        href={item.href}
                                                        className="block font-semibold text-gray-900"
                                                    >
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </Popover>

                        <a
                            href="/pet-resources"
                            className="font-semi-bold group whitespace-nowrap text-lg leading-6 text-[#fff]  transition duration-300"
                        >
                            Pet Resources
                            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                        </a>
                        <a
                            href="/merch"
                            className="font-semi-bold group text-lg leading-6 text-[#fff]  transition duration-300"
                        >
                            Merch
                            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                        </a>
                        <a
                            href="/about"
                            className="font-semi-bold group text-lg leading-6 text-[#fff]  transition duration-300"
                        >
                            About
                            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                        </a>
                        <a
                            href="donate"
                            className=" font-semi-bold group whitespace-nowrap text-lg leading-6 text-[#fff]  transition duration-300"
                        >
                            Donate Now
                            <span className="block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full"></span>
                        </a>
                    </PopoverGroup>
                </nav>

                {/* Mobile */}
                <Dialog
                    className="bg-zinc-900 lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10 " />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border border-black bg-zinc-900 px-6 py-6 text-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
                        <div className="flex items-center justify-between font-teko">
                            <a href="#" className="-m-1.5 flex p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-16 w-auto rounded-full"
                                    src="/rrr-logo.jpg"
                                    alt="rrr logo"
                                />
                                <div className="ml-4 font-teko text-2xl font-thin">
                                    <p>Rocky Road</p>
                                    <p>Rescue</p>
                                </div>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="https://www.facebook.com/RockyRoadRescueCanada/events?ref=page_internal"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                                    >
                                        Events
                                    </a>
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800">
                                                    Adopt
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open
                                                                ? 'rotate-180'
                                                                : '',
                                                            'h-5 w-5 flex-none'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel className="mt-2 space-y-2">
                                                    {[
                                                        ...adopt,
                                                        // ...callsToAction,
                                                    ].map((item) => (
                                                        <DisclosureButton
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-zinc-800"
                                                        >
                                                            {item.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800">
                                                    Foster
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open
                                                                ? 'rotate-180'
                                                                : '',
                                                            'h-5 w-5 flex-none'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel className="mt-2 space-y-2">
                                                    {[
                                                        ...foster,
                                                        // ...callsToAction,
                                                    ].map((item) => (
                                                        <DisclosureButton
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-zinc-800"
                                                        >
                                                            {item.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800">
                                                    Volunteer
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open
                                                                ? 'rotate-180'
                                                                : '',
                                                            'h-5 w-5 flex-none'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </DisclosureButton>
                                                <DisclosurePanel className="mt-2 space-y-2">
                                                    {[
                                                        ...volunteer,
                                                        // ...callsToAction,
                                                    ].map((item) => (
                                                        <DisclosureButton
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-zinc-800"
                                                        >
                                                            {item.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>

                                    <a
                                        href="/pet-resources"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                                    >
                                        Pet Resources
                                    </a>
                                    <a
                                        href="/merch"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                                    >
                                        Merch
                                    </a>
                                    <a
                                        href="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="/donate"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
                                    >
                                        Donate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            {children}
        </div>
    );
}
