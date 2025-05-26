import Image from 'next/image';

export default function Section4() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-base)] dark:bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem redonda, centralizada no mobile */}
        <div className="flex justify-center">
          <Image
            src="/Microcontrolador.jpg"
            alt="Imagem de microcontrolador"
            width={450}
            height={450}
            className="rounded-full shadow-md object-cover"
            priority
          />
        </div>

        {/* Texto à direita no desktop, centralizado no mobile */}
        <div className="space-y-8 px-2">
          <h2 className="text-center md:text-right text-3xl sm:text-4xl font-bold uppercase text-[var(--color-text)]">
            Tecnologia Verde
          </h2>
          <p className="text-[var(--color-text)] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Utilizando microcontroladores como o Arduino, criámos um sistema inteligente que monitoriza em tempo real a humidade do solo e a temperatura. Combinando sensores físicos com modelos de linguagem natural (NLP), a planta comunica-se com o utilizador de forma simples e empática, tornando a planta verdadeiramente viva.
          </p>
        </div>
      </div>
    </section>
  );
}
