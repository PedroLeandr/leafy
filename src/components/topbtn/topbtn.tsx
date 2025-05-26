"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="icon"
      aria-label="Voltar ao topo"
      className="relative"  // se quiser garantir posição interna
    >
      <ArrowUp className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
