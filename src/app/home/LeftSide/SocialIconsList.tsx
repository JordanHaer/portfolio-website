import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";

export default function SocialIconsList() {
  const icons = [
    { link: "https://github.com/JordanHaer", iconComponent: <GitHubIcon />, iconId: "GitHub" },
    { link: "https://linkedin.com/in/JordanHaer", iconComponent: <LinkedInIcon />, iconId: "LinkedIn" },
  ];
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {icons.map((icon) => (
        <li key={icon.iconId} className="mr-5 text-xs">
          <a className="block hover:text-slate-200" href={icon.link} target="_blank" rel="noreferrer">
            <span className="sr-only">{icon.iconId}</span>
            {icon.iconComponent}
          </a>
        </li>
      ))}
    </ul>
  );
}
