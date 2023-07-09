import RightArrowIcon from "@/app/icons/RightArrowIcon";
import Link from "next/link";

interface ViewAllProps {
  href: string;
  label: string;
}

export default function ViewAll({ href, label }: ViewAllProps) {
  return (
    <div>
      <Link
        href={href}
        className="group inline-flex items-center font-semibold leading-tight text-slate-200"
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
