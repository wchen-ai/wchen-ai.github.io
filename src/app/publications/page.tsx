import type { Metadata } from "next";
import PublicationsContent from "./PublicationsContent";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <PublicationsContent />;
}
