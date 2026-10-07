import type { Metadata } from "next";

// Serve the home page directly at "/" instead of redirecting: a static export can only redirect
// on the client, which costs a blank page plus a second full page load.
export { default } from "./home/page";

export const metadata: Metadata = {
  alternates: { canonical: "/home/" },
};
