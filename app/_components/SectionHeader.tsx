type SectionHeaderProps = {
  heading: string;
};

export default function SectionHeader({ heading }: SectionHeaderProps) {
  return (
    <div className="pb-3 md:pb-4 border-b mb-3">
      <span className="text-2xl md:text-3xl text-primary font-bold">
        {heading}
      </span>
    </div>
  );
}
