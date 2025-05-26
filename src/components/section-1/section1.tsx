import Image from "next/image";
import { Bot } from "lucide-react";
import Navbar from "@/components/navbar/navbar";

export default function Section1() {
  return (
    <main>
      <header className="flex items-center justify-center bg-[var(--background)] dark:bg-[var(--background)] py-16">
        <div className="grid grid-cols-1 gap-6 max-w-4xl px-6 text-center">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Leafy-AI logo"
              width={350}
              height={350}
              priority
            />
          </div>
          <div className="flex items-center justify-between gap-2 p-2 rounded bg-[rgba(143,235,100,0.3)] dark:bg-[rgba(143,235,100,0.5)] max-w-md mx-auto">
            <Bot className="w-5 h-5 text-[var(--color-text)]" />
            <p className="uppercase text-[var(--color-text)] font-semibold tracking-wide text-sm sm:text-base">
              Novo modelo pronto a venda
            </p>
            <div>{/* Espaço vazio, pode remover se quiser */}</div>
          </div>
          <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
            Um amigo mais criativo
          </h1>
          <p className="max-w-lg mx-auto text-[var(--color-text)] text-sm sm:text-base">
            Mais que um vaso inteligente, um amigo inteligente, um assistente verde vivo
          </p>
          <div>
            <Navbar />
          </div>
        </div>
      </header>
    </main>
  );
}
