import { ModeToggle } from "@/components/theme-switch";
import HeaderBar from "./_components/HeaderBar";
import ContactInfo from "./_components/ContactInfo";
import AboutMe from "./_components/AboutMe";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Projects from "./_components/Projects";
import PrintButton from "./_components/PrintButton";

export default function Home() {
  return (
    <div className="w-full h-full md:max-w-[795px] max-h-[1000px] font-[family-name:var(--font-geist-sans)]">
      <HeaderBar />
      {/* <ModeToggle /> */}
      {/* Section 1 */}
      <div className="w-full flex justify-end">
        <ModeToggle />
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-5 h-full px-5">
        <div className="flex flex-col md:col-span-2  gap-6 md:mt-14 print:mt-10 print:md:mt-24">
          <AboutMe />
          <Education />
          <ContactInfo />

          <PrintButton />
        </div>
        <div className="flex flex-col md:col-span-3 mt-6 md:mt-0 print:md:mt-5 gap-6">
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}
