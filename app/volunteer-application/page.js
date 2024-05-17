import ComboForm from "@/components/ComboForm";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "About",
  description: "Rocky Road Rescue About Page",
};
const useFacebookCombo = {
  title: "Do you use Facebook?",
  options: [
    { id: "facebook-yes", text: "Yes" },
    { id: "facebook-no", text: "No" },
  ],
};
const haveCarCombo = {
  title: "Do you have access to a vehicle?",
  options: [
    { id: "vehicle-yes", text: "Yes" },
    { id: "vehicle-no", text: "No" },
    { id: "vehicle-sometimes", text: "Sometimes" },
  ],
};
export default function VolunteerApplication() {
  return (
    <div>
      <div className="text-center mx-auto w-2/3 mb-4 text-red-800 font-bold">
        <p>
          Here at Rocky Road Rescue we are always looking to expand our volunteer team and hear new and innovative ideas. If you are keen to get involved, we'd love to have you on board! Please complete our Volunteer
          Application below and someone from our Events & Fundraising Team will be in touch shortly.
        </p>
        <p className="py-4">If you have any questions about volunteering, please email us at events@rockyroadrescue.com. Click here to see what positions we currently have available.</p>
      </div>
      <div className="mx-auto w-11/12 sm:w-10/12 md:w-1/2 bg-white px-2 py-1 rounded-lg shadow-xl">
        <form>
          {/* Volunteer Application Header */}
          <div className="border-b border-gray-900/10 text-center my-2 pb-2 ">
            <h1 className=" font-semibold leading-7 text-gray-900 text-4xl ">Volunteer Application</h1>
          </div>
          {/* Spacing between sections */}
          <div className="space-y-4">
            {/* Personal Details Section */}
            <div className="border-b border-gray-900/10 pb-5">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Details</h2>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3 text-sm font-medium">
                  <label htmlFor="first-name" className="block  leading-6 text-gray-900">
                    First name
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="tel"
                      name="tel"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                    <span className=" text-red-600"> *</span>
                  </label>

                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>Canada</option>
                      <option>United States</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    Province / State
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    ZIP / Postal code
                    <span className=" text-red-600"> *</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <ComboForm title={useFacebookCombo.title} options={useFacebookCombo.options}></ComboForm>
                <ComboForm title={haveCarCombo.title} options={haveCarCombo.options}></ComboForm>

                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    What is the best way to contact you? Please select all that apply. <span className=" text-red-600"> *</span>
                  </legend>
                  <div className="mt-3 space-y-3">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-facebook" name="best-contact-facebook" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-facebook" className="font-medium text-gray-900">
                          Facebook Message
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-phone" name="best-contact-phone" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-phone" className="font-medium text-gray-900">
                          Phone Call
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-text" name="best-contact-text" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-text" className="font-medium text-gray-900">
                          Text Message
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/*Type of Volunteering Section*/}
            <div className="border-b border-gray-900/10 pb-5">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Details</h2>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-bold leading-6 text-gray-900">
                    Is there a specific role that you are applying htmlFor? If yes, please state.
                  </label>
                  <div className="mt-2">
                    <input
                      id="specific-role-text"
                      name="specific-role-text"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    What type of volunteering are you interested in? Please check all that apply. <span className=" text-red-600"> *</span>
                  </legend>
                  <div className="mt-6 space-y-3">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-facebook" name="best-contact-facebook" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-facebook" className="font-medium text-gray-900">
                          Volunteering at events
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Dog washing at events
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Nail trimming
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Baking htmlFor events & fundraisers
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Driving (Dogs) – e.g. Transporting dogs to and from the vet; taking dogs to and from adoption events
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Driving (Supplies) – e.g. Donation pick up and drop off; taking items to foster families etc.
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Dog sitting when foster families go out of town (usually a few days at a time)
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Helping organize and run fundraisers - eg. Bottle drives, online auctions, bake sales etc.
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Photography (please state skill level in ‘other’ section below)
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Fostering
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-phone" name="best-contact-phone" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-phone" className="font-medium text-gray-900">
                          Other (please specify below)
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  If you selected 'other' to the above question, please specify here.
                </label>
                <div className="mt-2">
                  <input
                    id="volunteer-other-text"
                    name="volunteer-other-text"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>

              {/*location volunteer in*/}
              <div className="col-span-full">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Which locations are you willing to volunteer in? Please check all that apply.<span className=" text-red-600"> *</span>
                  </legend>
                  <div className="mt-6 space-y-3">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-facebook" name="best-contact-facebook" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-facebook" className="font-medium text-gray-900">
                          Downtown Ottawa
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Kanata
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Orleans
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Nepean
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Carleton Place
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Smiths Falls
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Perth
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Almonte
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-email" name="best-contact-email" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-email" className="font-medium text-gray-900">
                          Winchester
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="best-contact-phone" name="best-contact-phone" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="best-contact-phone" className="font-medium text-gray-900">
                          Other (please specify below)
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  If you selected 'other' to the above question, please specify here.
                </label>
                <div className="mt-2">
                  <input
                    id="location-other-text"
                    name="location-other-text"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>

              {/*commit time frame*/}
              <div className="col-span-full">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">How long are you able to commit to volunteering htmlFor?</legend>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Just once or twice
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Up to 3 months
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Up to 6 months
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Up to 1 year
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Ongoing
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                        Other (please specify below)
                      </label>
                    </div>
                  </div>
                </fieldset>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  If you selected 'other' to the above question, please specify here.
                </label>
                <div className="mt-2">
                  <input
                    id="commit-other-text"
                    name="commit-other-text"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>
              {/*Weekly Availibility*/}
              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  What is your availability htmlFor volunteering? Eg. Weekends, Evenings, Tuesday mornings only, etc.
                </label>
                <div className="mt-2">
                  <input
                    id="volunteer-other-text"
                    name="volunteer-other-text"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>
            </div>
            {/*Experience Section*/}
            <div className="border-b border-gray-900/10 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Experience</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

              <div className="mt-5 space-y-10">
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Why would you like to volunteer with Rocky Road Rescue?
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    What skills, experience and knowledge do you have that would help your volunteer work? (Please give details)
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Is there any other information you would like us to know?
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    And finally... How did you hear about Rocky Road Rescue?
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
