import Image from 'next/image';

export default function Section5() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-base)] dark:bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto à esquerda no desktop, centralizado no mobile */}
        <div className="space-y-8 px-2">
          <h2 className="text-center md:text-left text-3xl sm:text-4xl font-bold uppercase text-[var(--color-text)]">
            Sustentabilidade em Primeiro Lugar
          </h2>
          <p className="text-[var(--color-text)] text-center md:text-left text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            O nosso design foi cuidadosamente pensado para reduzir o impacto ambiental. Integrado no programa Eco-Escolas, reutilizamos baterias de computadores portáteis para alimentar o dispositivo, promovendo a sustentabilidade e dando uma nova vida a componentes eletrónicos.
          </p>
        </div>

        {/* Imagem redonda, centralizada no mobile */}
        <div className="flex justify-center">
          <Image
            src="/Ecoimage.jpg"
            alt="Imagem de microcontrolador"
            width={450}
            height={450}
            className="rounded-full shadow-md object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
