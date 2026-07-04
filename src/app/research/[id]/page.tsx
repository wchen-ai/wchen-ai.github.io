import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ResearchDetail from "./ResearchDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return { title: project?.title ?? "Research" };
}

export default async function ResearchProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return null;
  return <ResearchDetail project={project} />;
}
