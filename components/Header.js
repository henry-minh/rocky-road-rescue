"use client";
// export default function Header({ children }) {
//   return (
//     <div>
//       <p>header</p>
//       {children}
//     </div>
//   );
// }

import { PopoverGroup, PopoverPanel, DialogPanel, PopoverButton, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon, ClipboardDocumentListIcon, QuestionMarkCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const adopt = [
  { name: "Adoption Proccess", description: "Get a better understanding of your traffic", href: "/adoption-process", icon: ClipboardDocumentListIcon },
  { name: "Adoptable Dogs", description: "Speak directly to your customers", href: "/adoptable-dogs", icon: CursorArrowRaysIcon },
  { name: "Adoption Application", description: "Speak directly to your customers", href: "/adoption-application", icon: CursorArrowRaysIcon },
  //   { name: "Foster Application", description: "Your customers’ data will be safe and secure", href: "#", icon: FingerPrintIcon },
  //   { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
  //   { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];
const foster = [
  { name: "Why Foster", description: "Get a better understanding of your traffic", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Dogs Looking For Fosters", description: "Speak directly to your customers", href: "#", icon: CursorArrowRaysIcon },
  { name: "Foster Application", description: "Your customers’ data will be safe and secure", href: "#", icon: CursorArrowRaysIcon },
  //   { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
  //   { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];
const volunteer_header_data = [
  { name: "Volunteer with Rocky Road Rescue", description: "Get a better understanding of your traffic", href: "#", icon: UserGroupIcon },
  { name: "Volunteer Application", description: "Speak directly to your customers", href: "/volunteer-application", icon: CursorArrowRaysIcon },
  // { name: "Foster Application", description: "Your customers’ data will be safe and secure", href: "#", icon: FingerPrintIcon },
  //   { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
  //   { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];
const callsToAction = [
  //   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  //   { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="mx-auto flex gap-4 items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5 flex-shrink-0">
          <img className="h-20  rounded-full w-full" src={"/rrr-logo.jpg"} alt="" />
        </a>

        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10 text-red-800" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-4 mx-auto">
          <a
            href="https://www.facebook.com/RockyRoadRescueCanada/events?ref=page_internal"
            target="_none"
            className="text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            Events
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center   text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              Adopt
              <ChevronDownIcon className="h-7 w-7 flex-none text-red-800" aria-hidden="true" />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {adopt.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center   text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              Foster
              <ChevronDownIcon className="h-7 w-7 flex-none text-red-800" aria-hidden="true" />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {foster.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center   text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              Volunteer
              <ChevronDownIcon className="h-7 w-7 flex-none text-red-800" aria-hidden="true" />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {volunteer_header_data.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href="#" className="text-red-800 whitespace-nowrap font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            Pet Resources
          </a>
          <a href="#" className="text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            Merch
          </a>
          <a href="#" className="text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            About
          </a>
          <a href="#" className=" text-red-800 font-light text-2xl font-supersized leading-6 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            Donate
          </a>
        </PopoverGroup>
      </nav>

      {/* Mobile */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...foster, ...callsToAction].map((item) => (
                          <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Events
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Resources
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Donate
                </a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Donate
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {children}
    </header>
  );
}
