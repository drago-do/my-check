import Link from "next/link";
import Image from "next/image";
import Container from "./../components/general/Container";
export default function NotFound() {
  return (
    <Container className="flex flex-col items-center">
      <Image
        src={"/404.png"}
        width={300}
        height={300}
        className="rounded-xl"
        alt="404 error"
      />
      <h2 className="text-blue-600 font-bold text-4xl my-6">404 Not Found</h2>
      <p className="text-gray-500 mb-36">
        Estamos construyendo esta parte aun.
      </p>
      <Link href="/">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Regresar al inicio
        </button>
      </Link>
    </Container>
  );
}
