import React, { useState, useEffect } from "react";
import MaterialIcon from "./MaterialIcon";

//Uso de SpeedDial
//Array de acciones
const actions = [
  {
    icon: null, //<YourIconComponent />,
    text: "Share",
    onClick: () => {
      /* handle share action */
    },
  },
  {
    icon: null, //<YourIconComponent />,
    text: "Print",
    onClick: () => {
      /* handle print action */
    },
  },
  // ... other actions
];

//Acción única
const action = {
  icon: null, //<YourIconComponent />,
  text: "Add",
  onClick: () => {
    /* handle add action */
  },
};

const SpeedDialAction = ({ icon, text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
    data-tooltip-target={`tooltip-${text}`}
    data-tooltip-placement="left"
  >
    {icon}
    <span className="sr-only">{text}</span>
    <div
      id={`tooltip-${text}`}
      role="tooltip"
      className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {text}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  </button>
);

const SpeedDial = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isArrayActions, setIsArrayActions] = useState(false);

  useEffect(() => {
    if (Array.isArray(actions)) {
      setIsArrayActions(true);
    }
    setLoading(false);
  }, [actions]);

  return (
    <div className={`fixed end-6 bottom-6 group`}>
      {loading ? (
        <button
          type="button"
          aria-controls="speed-dial-menu-click"
          className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </button>
      ) : (
        <>
          {isOpen && (
            <div
              id="speed-dial-menu-click"
              className="flex flex-col items-center mb-4 space-y-2"
            >
              {actions.map((action, index) => (
                <SpeedDialAction
                  key={index}
                  icon={action.icon}
                  text={action.text}
                  onClick={action.onClick}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-controls="speed-dial-menu-click"
            aria-expanded={isOpen ? "true" : "false"}
            className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
            onClick={() =>
              isArrayActions ? setIsOpen(!isOpen) : actions?.onClick() || null
            }
          >
            {isArrayActions ? (
              <>
                <MaterialIcon iconName="more_vert" />
                <span className="sr-only">Open actions menu</span>
              </>
            ) : (
              actions?.icon || <MaterialIcon iconName="bolt" />
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default SpeedDial;
