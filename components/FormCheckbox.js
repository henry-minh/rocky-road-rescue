export default function FormCheckbox({ title, options }) {
    return (
        <div className="mt-4">
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-sky-900">
                    {title} <span className=" text-red-600"> *</span>
                </legend>
                <div className="mt-3 space-y-3">
                    {options.map((state) => (
                        <div className="relative flex gap-x-3" key={state.id}>
                            <div className="flex h-6 items-center">
                                <input
                                    id={state.id}
                                    name={title}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label
                                    htmlFor={state.id}
                                    className="font-medium text-gray-900"
                                >
                                    {state.text}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}
