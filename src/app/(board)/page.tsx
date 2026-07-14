import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board",
  description: "Follow de development progress of our entire plataform",
};

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  return (
    <div className="max-w-[1620px] w-full mx-auto px-10 flex flex-col h-dvh">
      <div></div>

      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        <Section.Root>
          {/* HEADER */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount>16</Section.IssueCount>
          </Section.Header>

          {/* CONTEUDO */}
          <Section.Content>
            {/* CARDS */}
            <Card.Root>
              <Card.Header>
                <Card.Number>ECO-001</Card.Number>
                <Card.Title>Implementar cartão de crédito</Card.Title>
              </Card.Header>

              <Card.Footer>
                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer"
                >
                  <ThumbsUpIcon className="size-3" />
                  <span className="text-sm">12</span>
                </button>

                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer"
                >
                  <MessageCircleIcon className="size-3" />
                  <span className="text-sm">6</span>
                </button>
              </Card.Footer>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
