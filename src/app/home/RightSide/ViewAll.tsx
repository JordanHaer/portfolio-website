import RightArrowIcon from "@/app/icons/RightArrowIcon";
import Link from "next/link";

interface ViewAllProps {
  href: string;
  label: string;
}

export default function ViewAll({ href, label }: ViewAllProps) {
  return (
    <div className="mt-8">
      <Link
        href={href}
        className="inline-flex items-center  leading-tight font-semibold text-slate-200 group"
        aria-label="View Full Project Archive"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          View All {label}
        </span>
        <RightArrowIcon />
      </Link>
    </div>
  );
}
