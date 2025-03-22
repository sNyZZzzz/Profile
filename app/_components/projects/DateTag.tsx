import { formatDate } from "date-fns";

type DateTagProps = {
  date: string;
};

export default function DateTag({ date }: DateTagProps) {
  const baseDate = new Date(date);

  const day = formatDate(baseDate, "dd");
  const month = formatDate(baseDate, "MMM");
  const year = formatDate(baseDate, "yyyy");

  return (
    <div className="flex gap-1">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
