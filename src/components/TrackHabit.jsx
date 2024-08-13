import React from "react";
import { useState } from "react";

function TrackHabit() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8">
        <h1>Did you do your habit statement ?</h1>
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="ml-2 text-gray-700"> Completed your habit </span>
      {/* {isChecked ? <p>Checkbox is checked!</p> : <p>Checkbox is not checked.</p>} */}
      </div>
    </>
  );
}

export default TrackHabit;
