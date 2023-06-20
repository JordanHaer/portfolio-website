"use client";
import { Link } from "react-scroll";
import "./NavList.css";

export default function NavList() {
  const listItems = ["about", "projects", "blog"];
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-12 w-max">
        {listItems.map((item) => (
          <li key={item} className="cursor-pointer">
            <Link className="group flex items-center py-3" to={item} activeClass="active" spy={true}>
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
