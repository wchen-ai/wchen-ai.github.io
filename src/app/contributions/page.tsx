import type { Metadata } from "next";
import ContributionsContent from "./ContributionsContent";

export const metadata: Metadata = { title: "Contributions" };

export default function ContributionsPage() {
  return <ContributionsContent />;
}
