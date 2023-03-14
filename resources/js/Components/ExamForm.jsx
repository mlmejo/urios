import { useState } from "react";

export default function ExamForm() {
  const [options, setOptions] = useState([]);

  const addOptions = () => {
    const radios = [...options, []];
    setOptions(radios);
  };

  return (
    <div className="exam-form mt-5 w-full bg-white px-5 py-8 transition duration-300 ease-in">
      <div className="exam-question pb-4  ">
        <h1 className="text-md font-base"></h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Question"
          className="rounded-md border-b border-gray-300 py-3 transition duration-300 ease-in focus:w-full focus:border-b-2 focus:border-purple-600 focus:outline-none"
        />
      </div>
      <ul className="form-choices space-y-2 pb-5 text-sm">
        <li>
          <div className="flex items-center space-x-3">
            <input type="radio" />
            <input
              type="text"
              name="choice"
              id="choice"
              placeholder="Add Option"
              className="rounded-md border-b-0 border-gray-300 py-2 transition duration-300 ease-in focus:w-[25%] focus:border-b-2 focus:border-purple-600 focus:outline-none"
            />
          </div>
        </li>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <div className="flex items-center space-x-3">
                <input type="radio" />
                <input
                  type="text"
                  name="choice"
                  id="choice"
                  placeholder="Add Option"
                  className="rounded-md border-b-0 border-gray-300 py-2 transition duration-300 ease-in focus:w-[25%] focus:border-b-2 focus:border-purple-600 focus:outline-none"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <button
        onClick={addOptions}
        className="rounded-md bg-purple-500 px-3 py-1 text-sm text-white hover:font-semibold"
      >
        Add Other Option
      </button>
    </div>
  );
}
