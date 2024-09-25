import { ModeToggle } from "@/components/theme-switch";
import HeaderBar from "./_components/HeaderBar";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[793px] max-h-[1000px] font-[family-name:var(--font-geist-sans)]">
      <HeaderBar />
      <ModeToggle />
      <div className="grid grid-cols-5 gap-4 h-full">
        <div className="col-span-2 bg-green-200">1</div>
        <div className="col-span-3 bg-blue-200">1</div>
      </div>
    </div>
  );
}
