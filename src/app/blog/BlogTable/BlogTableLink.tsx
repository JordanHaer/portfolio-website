import RightArrowIcon from "@/app/icons/RightArrowIcon";
import Link from "next/link";

interface BlogTableLinkProps {
  title: string;
  blogLink: string;
}

export default function BlogTableLink({ title, blogLink }: BlogTableLinkProps) {
  return (
    <p className="mb-[2px] block leading-snug">
      <Link
        className="group whitespace-nowrap text-sm font-medium leading-tight text-slate-400   hover:text-teal-300 focus-visible:text-teal-300"
        href={blogLink}
        aria-label={blogLink}
      >
        <span className="inline-block">
          <span className=" border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            {title}
          </span>
          <RightArrowIcon />
        </span>
      </Link>
    </p>
  );
}
