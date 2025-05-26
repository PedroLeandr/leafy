import Image from "next/image";

export default function Section2() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="uppercase text-left font-bold text-3xl sm:text-4xl mb-8 text-[var(--color-text)]">
        Parcerias
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        {/* Pro Digital Key */}
        <div className="flex justify-center items-center">
          <Image
            className="hidden dark:block max-w-full h-auto"
            src="/LOGO-PRO-DIGITAL-KEY-SUB-WHITE.png"
            alt="Logo Pro Digital Key"
            width={250}
            height={250}
            priority
          />
          <Image
            className="block dark:hidden max-w-full h-auto"
            src="/LOGO-PRO-DIGITAL-KEY.png"
            alt="Logo Pro Digital Key"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* EPA */}
        <div className="flex justify-center items-center">
          <Image
            src="/Logo-epa.jpg"
            alt="Logo EPA escola profissional de Aveiro"
            width={120}
            height={120}
            className="rounded-lg max-w-full h-auto"
            priority
          />
        </div>

        {/* Hollacards */}
        <div className="flex justify-center items-center">
          <Image
            className="hidden dark:block max-w-full h-auto"
            src="/logo_hollacards.png"
            alt="Logo Hollacards"
            width={200}
            height={200}
            priority
          />
          <Image
            className="block dark:hidden max-w-full h-auto"
            src="/logo_hollacards_2.png"
            alt="Logo Hollacards"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* OpenQuest */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-xl max-w-full h-auto"
            src="/logo-s.jpg"
            alt="Logo OpenQuest"
            width={160}
            height={160}
            priority
          />
        </div>
        {/* OpenQuest */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-xl max-w-full h-auto"
            src="/Doretouch.jpg"
            alt="Logo Doretouch"
            width={140}
            height={140}
            priority
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="rounded-xl max-w-full h-auto"
            src="/Ferrokey_LOGO_FINAL-1024x222.png"
            alt="Logo Doretouch"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
    </section>
  );
}
