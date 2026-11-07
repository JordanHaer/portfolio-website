export default function Skill({ skill }: { skill: string }) {
  return (
    <li className="mt-2 mr-1.5">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
        {skill}
      </div>
    </li>
  )
}
