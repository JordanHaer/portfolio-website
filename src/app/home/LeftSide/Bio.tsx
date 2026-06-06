import { bioContent } from "@/app/content/bio";

export default function Bio() {
  const { name , role, description } = bioContent

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-200 sm:text-6xl">{name}</h1>
      <h2 className="mt-4 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">{role}</h2>
      <p className="mt-4 max-w-xs leading-normal">{description}</p>
    </>
  );
}
