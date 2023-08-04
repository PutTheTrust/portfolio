import { CloudLightning } from "lucide-react";
import SkillCard from "./skill-card";

const Skills = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between dark:text-white">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <CloudLightning />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mt-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
