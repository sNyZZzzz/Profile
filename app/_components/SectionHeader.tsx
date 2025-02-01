import Link from "next/link";

type SectionHeaderProps = {
  heading: string;
  redirectLink?: string;
};

export default function SectionHeader({
  heading,
  redirectLink,
}: SectionHeaderProps) {
  return (
    <div className="pb-3 md:pb-4 border-b mb-3">
      {redirectLink ? (
        <Link
          className="text-xl md:text-3xl text-primary font-bold"
          href={redirectLink || "/"}
        >
          {heading}
        </Link>
      ) : (
        <div className="text-xl md:text-3xl text-primary font-bold">
          {heading}
        </div>
      )}
    </div>
  );
}
