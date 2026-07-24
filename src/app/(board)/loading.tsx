import { Metadata } from "next";
import { BoardContent } from "./board-content";

export const metadata: Metadata = {
  title: "Board",
  description: "Follow de development progress of our entire plataform",
};

export default async function BoardLoading() {
  return <div>Carregando...</div>;
}
