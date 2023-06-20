import Image from "next/image";
import RightArrowIcon from "@/app/icons/RightArrowIcon";
import Skills from "./Skill";

interface ProjectCardProps {
  image: string;
  demoLink: string;
  title: string;
  description: string;
  skills: string[];
}

export default function ProjectCard({ image, demoLink, title, description, skills }: ProjectCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={title}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  {title}
                </span>
                <span className="inline-block">
                  <RightArrowIcon />
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {skills.sort().map((skill) => (
              <Skills skill={skill} key={skill} />
            ))}
          </ul>
        </div>
        <Image
          src={image}
          alt={`${title} image`}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        />
      </div>
    </li>
  );
}
