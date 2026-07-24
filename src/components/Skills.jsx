import { useEffect, useState, useRef } from "react";
import sanityClient from "../lib/client";
import { SKILL_ICONS } from "../lib/skillIcons";

export default function Skills() {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    sanityClient
      .fetch(`*[_type == "skill"] | order(order asc){
        name,
        icon
      }`)
      .then((data) => {
        if (mountedRef.current) setSkills(data);
      })
      .catch(() => {
        if (mountedRef.current) setError(true);
      });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  if (error) return <p className="text-muted text-xs">Failed to load skills.</p>;
  if (!skills) return null;

  const isOrphanLast = skills.length % 3 === 1;

  return (
    <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2.5">
      {skills.map((skill, index) => {
        const Icon = SKILL_ICONS[skill.icon];
        const isLast = index === skills.length - 1;
        return (
          <span
            key={skill.name}
            className={`flex w-full sm:inline-flex sm:w-auto items-center justify-center gap-2 bg-white border border-line rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-ink shadow-sm ${isOrphanLast && isLast ? "col-start-2 sm:col-start-auto" : ""}`}
          >
            {Icon && <Icon className="text-accent shrink-0" size={16} />}
            {skill.name}
          </span>
        );
      })}
    </div>
  );
}
