import { listIssues } from "@/http/list-issues";
import { Metadata } from "next";
import { BoardContent } from "./board-content";

export const metadata: Metadata = {
  title: "Board",
  description: "Follow de development progress of our entire plataform",
};

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  const issues = await listIssues({ search: q });

  return <BoardContent issues={issues} />;
}
