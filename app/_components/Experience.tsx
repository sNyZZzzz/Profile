import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <div>
      <SectionHeader heading="Professional Experience" />

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
        company="WTax (VATIT)"
        companyLink="https://wtax.co/"
        jobTitle="Data Engineer"
        startDate="Aug 2022"
        endDate="Jun 2023"
        responsibilities={[
          "Bulk data pre-processing",
          "Process automation using low-code platforms",
        ]}
      />
    </div>
  );
}

type ExperienceTypeProps = {
  company?: string;
  companyLink?: string;
  jobTitle: string;
  startDate: string | null;
  endDate: string | null;
  responsibilities?: Array<string>;
};

export function ExperieceItem({
  company,
  companyLink,
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
            <a
              className="font-extrabold text-lg w-full bg-muted rounded-md text-center"
              href={companyLink}
              target="_blank"
            >
              {company}
            </a>
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
