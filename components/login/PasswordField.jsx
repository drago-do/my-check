"use client";
import React, { useRef, useState, useEffect } from "react";
const defaultPinCode = {
  code1: "",
  code2: "",
  code3: "",
  code4: "",
};

export default function VerificationCodeInput({ handlePin, error }) {
  const [pin, setPin] = useState(defaultPinCode);
  // Crear refs para cada input
  const code1Ref = useRef(null);
  const code2Ref = useRef(null);
  const code3Ref = useRef(null);
  const code4Ref = useRef(null);
  const arrayReference = [code1Ref, code2Ref, code3Ref, code4Ref];

  useEffect(() => {
    // Si el pin es de 4 caracteres, haz algo
    if (error) {
      cleanOnError();
      //Quita el foco de todos los elementos referenciados
      arrayReference.forEach((ref) => {
        ref.current.blur();
      });
    }
    if (
      pin.code4 !== "" &&
      pin.code3 !== "" &&
      pin.code2 !== "" &&
      pin.code1 !== "" &&
      !error
    ) {
      handlePin(`${pin.code1}${pin.code2}${pin.code3}${pin.code4}`);
      // Aquí puedes enviar el pin al servidor
    }
  }, [pin, error]);

  const cleanOnError = () => {
    setPin(defaultPinCode);
    //Eliminar los valores de los input
    arrayReference.forEach((ref) => {
      ref.current.value = "";
    });
  };

  // Función para enfocar el siguiente input
  const focusNextInput = (currentRef, nextRef) => {
    if (currentRef && currentRef.current && nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  };
  const handleKeyUp = (event, currentField, nextRef, prevRef) => {
    const value = event.target.value;
    updatePin(value, currentField);
    if (value.length >= 1 && nextRef) {
      focusNextInput({ current: event.target }, nextRef);
    }
    // Si no hay un valor y existe un input anterior, enfoca el input anterior.
    if (!value && prevRef) {
      focusNextInput({ current: event.target }, prevRef);
    }
  };
  const updatePin = (value, field) => {
    setPin((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
        {/* Repetir esto para cada input, actualizando las referencias y los índices */}
        {arrayReference.map((ref, index) => (
          <div key={`code-${index + 1}`}>
            <label htmlFor={`code-${index + 1}`} className="sr-only">
              Code {index + 1}
            </label>
            <input
              type="text"
              autoFocus={index === 0 ? true : false}
              maxLength="1"
              onKeyUp={(event) =>
                handleKeyUp(
                  event,
                  `code${index + 1}`,
                  arrayReference[index + 1],
                  arrayReference[index - 1]
                )
              }
              id={`code-${index + 1}`}
              ref={ref}
              className={`block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border ${
                error ? "border-red-800" : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
              required
            />
          </div>
        ))}
      </div>
      {error ? (
        <p className=" mt-2 text-sm text-red-700 dark:text-red-700">
          Usuario o contraseña incorrectos
        </p>
      ) : (
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Selecciona tu usuario e introduce tu pin por favor.
        </p>
      )}
    </div>
  );
}
