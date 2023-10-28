import Blog from "./Blog/Blog";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

export default function RightSide() {
  return (
    <main id="content" className="lg:w-1/2">
      <Experience />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}
