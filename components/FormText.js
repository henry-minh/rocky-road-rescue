export default function FormText({ title }) {
  return (
    <div className="mt-4">
      <label htmlFor="about" className="block text-sm font-semibold leading-6 text-sky-900">
        {title}
      </label>
      <div className="mt-2">
        <input
          id="specific-role-text"
          name="specific-role-text"
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
      </div>
    </div>
  );
}
