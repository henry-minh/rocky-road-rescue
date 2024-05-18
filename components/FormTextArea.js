export default function FormText({ title }) {
  return (
    <div>
      <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows="2"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
      </div>
    </div>
  );
}