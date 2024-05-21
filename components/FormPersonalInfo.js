export default function FormPersonalInfo() {
    return (
        <div className="mt-4">
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="text-sm font-medium sm:col-span-3">
                    <label
                        htmlFor="first-name"
                        className="block font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="country"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
                        Country
                        <span className=" text-red-600"> *</span>
                    </label>

                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>Canada</option>
                            <option>United States</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label
                        htmlFor="street-address"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="city"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="region"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
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
                    <label
                        htmlFor="postal-code"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                    >
                        ZIP / Postal Code
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
        </div>
    );
}
