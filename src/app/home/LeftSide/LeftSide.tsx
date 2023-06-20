import Bio from "./Bio";
import NavList from "./NavList/NavList";
import SocialIconsList from "./SocialIconsList";

export default function LeftSide() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:max-w-[415px]">
      <div>
        <Bio />
        <NavList />
      </div>
      <SocialIconsList />
    </header>
  );
}
