import React from "react";
import AlertItem from "../AlertItem";

export default function InputForm({
  name = "default",
  formName = "Default name",
  number = false,
  placeholder = "",
  required = false,
  errors,
  useFormMethods,
  validators,
  extraProperties,
}) {
  return (
    <>
      {useFormMethods && errors ? (
        <div className="m-2">
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {formName}
          </label>
          <input
            type={number ? "number" : "text"}
            id={name}
            name={name}
            {...useFormMethods.register(name, {
              required: required
                ? `Campo ${number ? "de tipo numérico" : ""} requerido.`
                : false,
              ...validators,
            })}
            className={`bg-gray-50 border ${
              errors[name]?.message
                ? "border-red-600 dark:border-red-400 text-red-600 dark:text-red-400"
                : "text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 "
            }  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder={placeholder}
            required={required}
            {...extraProperties}
          />
          {errors[name] && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              {errors[name]?.message}
            </p>
          )}
        </div>
      ) : (
        <input
          className={`bg-gray-50 border "text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 "
           text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          {...extraProperties}
        />
      )}
    </>
  );
}
