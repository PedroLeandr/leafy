import Footer from "@/components/footer/footer";
import Section1 from "@/components/section-1/section1";
import Section2 from "@/components/section-2/section2";
import Section3 from "@/components/section-3/section3";
import Section4 from "@/components/section-4/section4";
import Section5 from "@/components/section-5/section5";


export default function Home() {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto px-4">
        <section id="home" className="pt-16">
          <Section1 />
        </section>
        <section id="empresa" className="py-16">
          <Section2 />
        </section>
        <section id="sobre-projeto" className="py-16">
          <Section3 />
        </section>
        <section className="py-16">
          <Section4 />
        </section>
        <section className="pb-16">
          <Section5 />
        </section>
      </div>
      <footer id="contactos">
        <Footer />
      </footer>
    </main>
  );
}

