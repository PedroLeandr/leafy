import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="py-16 bg-[var(--color-background)] dark:bg-[var(--color-base)] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="uppercase text-left font-bold text-3xl sm:text-4xl text-[var(--color-text)]">
          Sobre Projeto
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center">
          {/* Card 1 */}
          <Card className="w-full max-w-[350px] bg-transparent shadow-none border-none">
            <CardHeader className="flex justify-center items-center">
              <div className="w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] rounded-full overflow-hidden">
                <Image
                  src="/Ai-image.jpg"
                  alt="Imagem representando a inteligência artificial"
                  width={125}
                  height={125}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-left text-lg sm:text-xl mb-1 text-[var(--color-text)]">
                Inteligência Artificial
              </h3>
              <p className="text-sm sm:text-base text-left text-[var(--color-text)]/70">
                Utilizamos processamento de linguagem natural (NLP) para que o vaso inteligente consiga comunicar de forma simples e intuitiva com o utilizador.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="w-full max-w-[350px] bg-transparent shadow-none border-none">
            <CardHeader className="flex justify-center items-center">
              <div className="w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] rounded-full overflow-hidden">
                <Image
                  src="/Design.jpg"
                  alt="Imagem de design ecológico do vaso"
                  width={125}
                  height={125}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-left text-lg sm:text-xl mb-1 text-[var(--color-text)]">
                Design Sustentável
              </h3>
              <p className="text-sm sm:text-base text-left text-[var(--color-text)]/70">
                O design foi pensado para ser ecológico. Como parte das Eco-Escolas, utilizamos baterias reutilizadas de computadores para tornar o produto mais sustentável.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="w-full max-w-[350px] bg-transparent shadow-none border-none">
            <CardHeader className="flex justify-center items-center">
              <div className="w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] rounded-full overflow-hidden">
                <Image
                  src="/Hardware.jpg"
                  alt="Imagem dos componentes de hardware do projeto"
                  width={125}
                  height={125}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-left text-lg sm:text-xl mb-1 text-[var(--color-text)]">
                Hardware Integrado
              </h3>
              <p className="text-sm sm:text-base text-left text-[var(--color-text)]/70">
                Utilizamos um Arduino com uma série de sensores integrados que trocam informações em tempo real, mantendo o utilizador sempre atualizado sobre o estado do vaso.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
