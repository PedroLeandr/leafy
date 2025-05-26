import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-center p-4 bg-white dark:bg-[#1a2a1a] rounded drop-shadow-[0_2px_8px_rgba(143,235,100,0.3)]">
        <ul className="flex flex-wrap items-center gap-6 text-[var(--color-text)] dark:text-[var(--color-text-dark)] justify-center">
          <li className="min-w-[100px] h-12 border border-[rgba(50,100,30,0.5)] rounded-sm bg-[rgba(143,235,100,0.3)] text-base md:text-xl">
            <Link href="#home" className="flex h-full w-full items-center justify-center px-4">
              Home
            </Link>
          </li>
          <li className="min-w-[100px] h-12 border border-[rgba(50,100,30,0.5)] rounded-sm bg-[rgba(143,235,100,0.3)] text-base md:text-xl">
            <Link href="#empresa" className="flex h-full w-full items-center justify-center px-4">
              Parcerias
            </Link>
          </li>
          <li className="min-w-[120px] h-12 border border-[rgba(50,100,30,0.5)] rounded-sm bg-[rgba(143,235,100,0.3)] text-base md:text-xl">
            <Link href="#sobre-projeto" className="flex h-full w-full items-center justify-center px-4">
              Sobre Projeto
            </Link>
          </li>
          <li className="min-w-[120px] h-12 border border-[rgba(50,100,30,0.5)] rounded-sm bg-[rgba(143,235,100,0.3)] text-base md:text-xl">
            <Link href="#contactos" className="flex h-full w-full items-center justify-center px-4">
              Contactos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
