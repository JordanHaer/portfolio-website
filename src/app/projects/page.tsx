import Link from "next/link";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import ProjectTable from "./ProjectsTable/ProjectsTable";

export default function ProjectsPage() {
  return (
    <div className="group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20  lg:py-24">
        <Link
          href="/"
          className="group inline-flex items-center font-semibold leading-tight text-teal-300"
          aria-label="View Home Page"
        >
          <LeftArrowIcon />
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            Jordan Haer
          </span>
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
        <div className="overflow-x-auto">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
}
