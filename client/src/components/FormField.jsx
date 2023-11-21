import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Right Below 👇
        </button>
      )}
    </div>
    <p className="mt-2 mb-5 text-[#666e75] text-[14px] max-w [500px]">
      The OpenAI Image generator might take a 1-3 minutes to generate the image.
      Please be patient.🙌
    </p>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
