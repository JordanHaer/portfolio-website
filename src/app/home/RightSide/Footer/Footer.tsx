import FooterLink from "./FooterLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-md pt-16 text-sm text-slate-500 lg:py-24">
      Coded in <FooterLink href="https://code.visualstudio.com/" label="Visual Studio Code" />, built with{" "}
      <FooterLink href="https://nextjs.org/" label="Next.js" /> and{" "}
      <FooterLink href="https://tailwindcss.com/" label="Tailwind CSS" />, deployed with{" "}
      <FooterLink href="https://vercel.com/" label="Vercel" />. All text is set in the{" "}
      <FooterLink href="https://rsms.me/inter/" label="Inter" /> typeface.
      <p className="mt-8 text-center text-gray-600">&copy; {currentYear} Jordan Haer. All rights reserved.</p>
    </footer>
  );
}
