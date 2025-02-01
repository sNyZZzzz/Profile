import BreadCrumber from "@/app/_components/BreadCrumber";
import SectionHeading from "@/app/_components/projects/SectionHeading";
import SectionHeader from "@/app/_components/SectionHeader";

export default function Page() {
  return (
    <div className="w-full max-w-3xl ">
      <SectionHeading
        heading="Unilifts"
        date="2024/02/01"
        externalLink="https://www.unilifts.co.za"
      />
      <BreadCrumber />
      <div className="mx-4">
        <SectionHeader heading="Overview" />
        <div className="mb-6 text-pretty">
          <p>
            Unilifts is a ride sharing platform that aims to simplify the act of
            finding and hosting rides for university students. Unilifts allows
            students to search for rides going between various cities of South
            Africa.
          </p>
          <br></br>
          <p>
            The platform allows students to host rides that other students can
            request to join, at their set price. Ride hosts have full control
            over who is permitted to join their rides.
          </p>
        </div>
        <SectionHeader heading="Rides" />
        <SectionHeader heading="User Reviews" />
        <SectionHeader heading="Notifications" />
        <SectionHeader heading="Tech Stack" />
      </div>
    </div>
  );
}
