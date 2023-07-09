import AboutParagraph from "./AboutParagraph";

export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="pt-20 lg:pt-24">
        <h2 className="pb-6 sm:pb-8 text-4xl font-bold leading-tight tracking-tight text-slate-200 lg:pb-12 lg:pt-2 lg:text-5xl">
          About
        </h2>
        <AboutParagraph />
      </div>
    </section>
  );
}
