export default function ComboBox({ title, options }) {
    return (
        <div className="mt-4">
            <fieldset>
                <legend className="text-xl  font-semibold leading-6 text-sky-900">
                    {title} <span className=" text-red-600"> *</span>
                </legend>

                <div className="mt-3 space-y-3">
                    {options.map((state) => (
                        <div
                            className="flex items-center gap-x-3"
                            key={state.id}
                        >
                            <input
                                id={state.id}
                                name={title}
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                                htmlFor={state.id}
                                className="block text-lg font-medium leading-6 text-gray-900"
                            >
                                {state.text}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}
