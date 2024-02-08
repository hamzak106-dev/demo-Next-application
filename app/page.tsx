
import ScrollUp from "@/components/Common/ScrollUp";
import HomePage from "@/components/Home";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Ecommerce Application.",
  description: "Ecommerce Application that lists the Art work.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HomePage />
    </>
  );
}
