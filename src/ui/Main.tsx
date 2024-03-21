import { ReactNode } from "react";
import Heading from "./Heading";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="main">
      <Heading as="h2">Информация</Heading>
      {children}
    </main>
  );
}
