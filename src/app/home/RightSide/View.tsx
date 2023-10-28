import RightArrowIcon from "@/app/icons/RightArrowIcon";
import Link from "next/link";

interface ViewProps {
  href: string;
  label: string;
}

export default function View({ href, label }: ViewProps) {
  return (
    <div>
      <Link
        href={href}
        className="group inline-flex items-center font-semibold leading-tight text-slate-200"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
          {label}
        </span>
        <RightArrowIcon />
      </Link>
    </div>
  );
}
