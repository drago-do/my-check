export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/checkout/:path*",
    "/main/:path*",
    "/order/:path*",
    "/prepare/:path*",
    "/profile/:path*",
    "/settings/:path*",
    //"/businessAccess/:path*",
    // "/api/v1/:path*",
  ],
};
