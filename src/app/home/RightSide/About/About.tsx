import AboutParagraph from "./AboutParagraph";

export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="pt-14 lg:pb-0 lg:pt-24">
        <div className="bg-inherit/75 sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:hidden lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-3xl font-extrabold text-slate-200 sm:text-4xl lg:hidden">About</h2>
        </div>
        <h2 className="hidden font-bold leading-tight tracking-tight text-slate-200 lg:block lg:pb-8 lg:pt-2 lg:text-5xl">
          About
        </h2>
        <AboutParagraph />
      </div>
    </section>
  );
}
