import { NavLink } from "react-router-dom";
import learnOptions from "../../data/FooterLearn.json";

export default function LearnLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-lg dark:text-slate-200">LEARN</h5>
      <div className="flex flex-col">
        {learnOptions.map((option) => (
          <NavLink key={option.title} to={option.path}>
            {option.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
