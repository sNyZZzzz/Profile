import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <div>
      <SectionHeader heading="Professional Experience" />
      <ExperieceItem
        company="WTax (VATIT)"
        jobTitle="Data Engineer"
        startDate="Aug 2022"
        endDate="Jun 2023"
        responsibilities={[
          "Bulk data pre-processing",
          "Process automation using low-code platforms",
        ]}
      />

      <ExperieceItem
        // company="WTax (VATIT)"
        jobTitle="Product Owner (Finance)"
        startDate="Jun 2023"
        endDate="Aug 2023"
        responsibilities={[
          "Agile project management",
          "System design",
          "Stakeholder engagement",
        ]}
      />

      <ExperieceItem
        // company="WTax (VATIT)"
        jobTitle="Product Owner (Finance, Claims, Leads, Bots)"
        startDate="Aug 2023"
        endDate="Present"
        responsibilities={[
          "Similar responsibilities as above with a much larger scope of projects",
          "Bigger focus on system design and project management",
        ]}
      />
    </div>
  );
}

type ExperienceTypeProps = {
  company?: string;
  jobTitle: string;
  startDate: string | null;
  endDate: string | null;
  responsibilities?: Array<string>;
};

export function ExperieceItem({
  company,
  jobTitle,
  startDate,
  endDate,
  responsibilities,
}: ExperienceTypeProps) {
  return (
    <div className="flex flex-col gap-2 pb-2">
      <div className="flex gap-1 items-start flex-col">
        {company && (
          <>
            <span className="font-extrabold text-lg">{company}</span>
            {/* <ChevronRight className="h-4 w-4" /> */}
          </>
        )}
        <span className="text-lg font-bold">{jobTitle}</span>
      </div>
      <div className="italic -mt-2 text-sm">
        {startDate} - {endDate}
      </div>
      <span className="">Key responsibilities:</span>
      {responsibilities && (
        <ul className="list-disc pl-4 -mt-1">
          {responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
