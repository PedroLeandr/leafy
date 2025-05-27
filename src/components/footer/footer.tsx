export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-footer)] dark:bg-[var(--color-footer-dark)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl">
          Contacte-nos
        </h2>

        <div className="space-y-2 text-sm sm:text-base">
          <p>
            Email:{' '}
            <a
              href="mailto:project.leafy.ai@gmail.com"
              className="underline hover:text-green-500 transition-colors duration-200"
            >
              project.leafy.ai@gmail.com
            </a>
          </p>
          <p>
            Telefone:{' '}
            <a
              href="tel:+351938174439"
              className="underline hover:text-green-500 transition-colors duration-200"
            >
              +351 938 174 439
            </a>
          </p>
        </div>

        <p className="text-xs text-[var(--color-text)]/60 mt-4">
          &copy; {new Date().getFullYear()} LeafyAI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
