import type { Metadata } from "next";
import { getAllEssays, getEssay } from "@/lib/essays";
import EssayView from "./EssayView";

export function generateStaticParams() {
  return getAllEssays().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  const title = essay?.en?.title ?? essay?.zh?.title ?? "Essay";
  return { title };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return null;
  return <EssayView essay={essay} />;
}
