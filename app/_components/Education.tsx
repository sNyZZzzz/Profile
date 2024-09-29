import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <div className="">
      <SectionHeader heading="Education" />
      <ul className="flex flex-col list-disc pl-4 gap-2">
        <li>
          <EducationItem
            school="NWU Potchefstroom"
            degree="B.Eng - Computer and Electronic"
            completionYear="2018"
          />
        </li>
        <li>
          <EducationItem
            school="NWU Potchefstroom"
            degree="M.Eng - Convolutional Neural Networks"
            completionYear="2021"
          />
        </li>
      </ul>
    </div>
  );
}

type EducationItemProps = {
  school: string;
  degree: string;
  completionYear: string;
};

export function EducationItem({
  school,
  degree,
  completionYear,
}: EducationItemProps) {
  return (
    <div className="flex flex-col">
      <span>{school}</span>
      <span className="font-semibold">{degree}</span>
      <span className="italic text-sm">Completed in {completionYear}</span>
    </div>
  );
}
