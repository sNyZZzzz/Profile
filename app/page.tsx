import { ModeToggle } from "@/components/theme-switch";
import HeaderBar from "./_components/HeaderBar";
import ContactInfo from "./_components/ContactInfo";
import AboutMe from "./_components/AboutMe";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[793px] max-h-[1000px] font-[family-name:var(--font-geist-sans)]">
      <HeaderBar />
      {/* <ModeToggle /> */}
      {/* Section 1 */}
      <div className="md:grid md:grid-cols-5 md:gap-5 h-full px-5">
        <div className="flex flex-col md:col-span-2 mt-8 md:mt-24 gap-6">
          <AboutMe />
          <Education />
          <ContactInfo />
        </div>
        <div className="flex flex-col md:col-span-3 mt-6 gap-6">
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}
