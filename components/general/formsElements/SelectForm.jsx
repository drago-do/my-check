import React from "react";
import AlertItem from "./../AlertItem";

//!Example Array object
const countries = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
];

const SelectForm = ({
  name = "default",
  formName = "Default name",
  placeholder = "",
  required = false,
  options,
  errors,
  useFormMethods,
  validators,
  extraProperties,
}) => {
  return (
    <>
      {useFormMethods && errors && options ? (
        <div>
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {formName}
          </label>
          <select
            id={name}
            name={name}
            {...useFormMethods.register(name, {
              required: required ? `Campo requerido.` : false,
              ...validators,
            })}
            required={required}
            {...extraProperties}
            className={`bg-gray-50 ${
              errors[name]?.message
                ? "border-red-600 dark:border-red-400 text-red-600 dark:text-red-400"
                : "text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 "
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[name] && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              {errors[name]?.message}
            </p>
          )}
        </div>
      ) : (
        <AlertItem
          type={"error"}
          title="Error:"
          message="No hay opciones a elegir"
        />
      )}
    </>
  );
};

export default SelectForm;
