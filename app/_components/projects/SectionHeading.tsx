import DateTag from "./DateTag";

type SectionHeadingProps = {
  heading: string;
  date?: string;
};

export default function SectionHeading({ heading, date }: SectionHeadingProps) {
  return (
    <div className="bg-primary h-24 md:h-40  w-full px-6 md:px-10 flex flex-col justify-center gap-1 md:gap-2">
      <div className="font-bold text-xl md:text-4xl text-primary-foreground">
        {heading}
      </div>
      {date && (
        <div className="text-xs text-muted opacity-80 font-medium">
          <DateTag date={date} />
        </div>
      )}
    </div>
  );
}
