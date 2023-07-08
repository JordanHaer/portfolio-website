export default function AboutParagraph() {
  const aboutContent: string[] = [
    "When I began my coding journey, I enrolled in Harvard's CS50 Python course to establish a solid foundation in computer science. This course proved invaluable as it covered the fundamentals of programming and explored topics such as object-oriented-programming and data structures and algorithms.",
    "To further advance my skills, I joined a full-stack developer bootcamp, diving into web fundamentals and and gained hands-on experience in building applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
    "Applying my newfound knowledge, I developed MockStocks, a simulated trading platform. Through this project, I honed my skills in system design, backend development, user authentication, and frontend design.",
    "Continuously learning and staying updated with new tools, technologies, and concepts is an integral part of my journey as a developer, most recentcly learning Next.js as well as TypeScript. I am committed to expanding my knowledge base and further progressing my skills.",
  ];

  return (
    <div className="font-medium text-slate-300">
      {aboutContent.map((paragraph, index) => (
        <p className="pb-4" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
