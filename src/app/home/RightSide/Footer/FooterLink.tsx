interface FooterLinkProps {
  href: string;
  label: string;
}

export default function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
