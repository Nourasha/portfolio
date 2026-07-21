import skills from "../data/skills";

export default function Skills() {
          return (
            <>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col items-center gap-1.5 hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-150"
            >
              <div className={`w-9 h-9 ${skill.bg} rounded-lg flex items-center justify-center text-base`}>
                {skill.icon}
              </div>
              <span className="text-xs font-medium text-gray-800 text-center leading-tight">{skill.name}</span>
              <span className="text-xs text-gray-400 text-center leading-tight hidden sm:block">{skill.level}</span>
            </div>
          ))}
        </>
          )
}