import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
  const asPath = usePathname();

  // Obtén las rutas individuales y filtra entradas vacías
  const paths = asPath.split("/").filter((x) => x);
  const pathSegments = paths.map((path, index) => {
    // Construye la ruta hasta el segmento actual
    const href = "/" + paths.slice(0, index + 1).join("/");
    return { name: path.replace(/-/g, " "), href };
  });

  return (
    <nav aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {pathSegments.map((segment, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== pathSegments.length - 1 ? (
              <Link href={segment.href} passHref>
                <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  {index === 0 ? (
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG path aquí */}
                    </svg>
                  ) : null}
                  {segment.name}
                </a>
              </Link>
            ) : (
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {segment.name}
              </span>
            )}
            {index !== pathSegments.length - 1 && (
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
