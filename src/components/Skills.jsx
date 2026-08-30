import sanityClient from "@/lib/client";
import { SKILL_ICONS } from "@/lib/skillIcons";

export default async function Skills() {
  const skills = await sanityClient.fetch(
    `*[_type == "skill"] | order(order asc){ name, icon }`
  );

  if (!skills?.length) return null;

  const isOrphanLast = skills.length % 3 === 1;

  return (
    <ul className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2.5">
      {skills.map((skill, index) => {
        const Icon = SKILL_ICONS[skill.icon];
        const isLast = index === skills.length - 1;
        return (
          <li
            key={skill.name}
            className={`flex w-full sm:inline-flex sm:w-auto items-center justify-center gap-2 bg-white border border-line rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-ink shadow-sm ${isOrphanLast && isLast ? "col-start-2 sm:col-start-auto" : ""}`}
          >
            {Icon && <Icon className="text-accent shrink-0" size={16} />}
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
}
