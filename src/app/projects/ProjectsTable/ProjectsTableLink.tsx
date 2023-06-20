import RightArrowIcon from "@/app/icons/RightArrowIcon";

export default function ProjectTableLink({ externalLink }: { externalLink: string }) {
  const shortExternalLink = externalLink.split("https://")[1];
  return (
    <p className="mb-[2px] block leading-snug">
      <a
        className="group whitespace-nowrap text-sm font-medium leading-tight text-slate-400   hover:text-teal-300 focus-visible:text-teal-300"
        href={externalLink}
        target="_blank"
        rel="noreferrer"
        aria-label={externalLink}
      >
        <span className="inline-block">
          <span className=" border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            {shortExternalLink}
          </span>
          <RightArrowIcon />
        </span>
      </a>
    </p>
  );
}
