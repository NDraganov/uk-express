import { NavLink } from "react-router-dom";
import learnOptions from "../../data/FooterLearn.json";

export default function LearnLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-lg font-medium text-slate-200 dark:text-slate-200">
        LEARN
      </h5>
      <div className="flex flex-col">
        {learnOptions.map((option) => (
          <NavLink
            className="hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-100"
            key={option.title}
            to={option.path}
          >
            {option.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
