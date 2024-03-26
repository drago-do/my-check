export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/checkout",
    "/main",
    "/order",
    "/prepare",
    "/profile",
    "/settings",
  ],
};
