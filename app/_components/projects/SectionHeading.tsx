import { ExternalLink } from "lucide-react";
import DateTag from "./DateTag";
import Link from "next/link";

type SectionHeadingProps = {
  heading: string;
  date?: string;
  externalLink?: string;
};

export default function SectionHeading({
  heading,
  date,
  externalLink,
}: SectionHeadingProps) {
  return (
    <div className="bg-primary h-24 md:h-40  w-full px-6 md:px-10 flex flex-col justify-center gap-1 md:gap-2">
      <div className="font-bold text-xl md:text-4xl text-primary-foreground">
        {externalLink ? (
          <Link
            href={externalLink}
            className=" flex items-start gap-2 md:gap-3"
            target="_blank"
          >
            <span>{heading}</span>
            <ExternalLink className="h-3 w-3 md:h-5 md:w-5 shrink-0" />
          </Link>
        ) : (
          <span>{heading}</span>
        )}
      </div>
      {date && (
        <div className="text-xs text-white opacity-80 font-medium">
          <DateTag date={date} />
        </div>
      )}
    </div>
  );
}
