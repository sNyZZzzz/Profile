import BreadCrumber from "../_components/BreadCrumber";
import ProjectsList from "../_components/ProjectsList";
import SectionHeading from "../_components/projects/SectionHeading";

export default function Projects() {
  return (
    <div className=" w-full max-w-3xl ">
      <SectionHeading heading="Projects" date="2025/03/22" />
      <BreadCrumber />
      <div className="m-4 pt-4 ">
        <ProjectsList fullList={true} />
      </div>
    </div>
  );
}
