import React from "react";

function SubmitButton({ value }) {
  return (
    <button
      type="submit"
      className="w-full py-3 rounded-lg bg-[#162D3A] text-white text-base md:text-lg font-semibold cursor-pointer"
    >
      {value}
    </button>
  );
}

export default SubmitButton;
