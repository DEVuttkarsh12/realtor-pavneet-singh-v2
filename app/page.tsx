import type { Metadata } from "next";
import HomeExperience from "./components/HomeExperience";

export const metadata: Metadata = {
  title:
    "New Apartments for Rent in Upper Hammonds Plains | Lifestyle Enclave",
  description:
    "Brand-new 1-bedroom + den and 2-bedroom + den apartments from $1,750. Parking, water, gym and in-suite laundry included. Book an October 2026 tour.",
};

export default function Home() {
  return <HomeExperience />;
}
