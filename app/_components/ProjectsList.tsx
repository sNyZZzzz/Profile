import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

type ProjectsProps = {
  fullList?: boolean;
};

export default function ProjectsList({ fullList = false }: ProjectsProps) {
  return (
    <div className="-mt-2">
      {fullList || (
        <SectionHeader heading="Projects" redirectLink="/projects" />
      )}
      <ProjectCard
        title="Unilifts"
        description="A web platform for students to host, find and share rides."
        techStack={["React", "Next.js", "Supabase", "TailwindCSS"]}
        titleRef="/projects/unilifts"
        showItem={true || fullList}
      />

      <ProjectCard
        title="Tracking Translation Invariance in CNNs"
        description="Investigation of CNN architecture for translation invariance."
        techStack={["Python", "PyTorch"]}
        titleRef="https://arxiv.org/abs/2104.05997"
        showItem={true || fullList}
      />

      <ProjectCard
        title="Fee Engine"
        description="Novel system for managing complex client fees."
        techStack={["Jira", "Agile Sprint", "DrawIO"]}
        showItem={true || fullList}
      />
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  techStack?: string[];
  titleRef?: string;
  showItem: boolean;
  className?: string;
};

export function ProjectCard({
  title,
  description,
  techStack,
  titleRef,
  showItem,
  className,
}: ProjectCardProps) {
  return (
    <Link
      className={cn(
        `hidden  ${showItem && "flex flex-col gap-1 pb-5"}`,
        className
      )}
      href={titleRef || "/'"}
    >
      <span className="text-lg font-bold -mb-2">{title}</span>
      <span>{description}</span>
      <div className="flex flex-wrap gap-2 ">
        {techStack &&
          techStack.map((tech) => (
            <div
              key={tech}
              className="bg-primary rounded-full px-3 text-white text-sm font-semibold"
            >
              {tech}
            </div>
          ))}
      </div>
    </Link>
  );
}
