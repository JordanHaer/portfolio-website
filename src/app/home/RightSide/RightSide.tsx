import About from "./About/About";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

export default function RightSide() {
  return (
    <main id="content" className="lg:w-1/2">
      <About />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}
