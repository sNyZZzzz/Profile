import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <div className="-mt-2">
      <SectionHeader heading="Projects" />
      <ProjectCard
        title="Unilifts"
        description="A web platform for students to host, find and share rides."
        techStack={["React", "Node.js", "Supabase", "TailwindCSS"]}
        titleRef="https://unilifts.co.za/Welcome"
      />

      <ProjectCard
        title="Tracking Translation Invariance in CNNs"
        description="Investigation of CNN architecture for translation invariance."
        techStack={["Python", "PyTorch"]}
        titleRef="https://arxiv.org/abs/2104.05997"
      />

      <ProjectCard
        title="Fee Engine"
        description="Novel system for managing complex client fees."
        techStack={["Jira", "Agile Sprint", "DrawIO"]}
      />
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  techStack?: string[];
  titleRef?: string;
};

export function ProjectCard({
  title,
  description,
  techStack,
  titleRef,
}: ProjectCardProps) {
  return (
    <a className="flex flex-col gap-1 pb-3" href={titleRef} target="_blank">
      <span className="text-lg font-bold">{title}</span>
      <span>{description}</span>
      <div className="flex gap-2">
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
    </a>
  );
}
