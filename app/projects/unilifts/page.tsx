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
            The platform also allows students to host rides that other students
            can request to join, at their set price. Ride hosts have full
            control over who is permitted to join their rides.
          </p>
        </div>
        <SectionHeader heading="Rides" />
        <div className="mb-6 text-pretty">
          <p>
            When hosting a ride, students can set the origin, destination,
            price, depart time and available seats. Once a ride has been
            created, the host can easily share their ride on various platforms.
          </p>
          <br></br>
          <p>
            Students looking to join a ride can search for upcomming rides with
            available seats . Unilfts doesn&apos;t just search for rides
            matching their exact origin and destination, but also shows them
            other neary rides that could potentially help them get to where they
            need to go.
          </p>
          <br></br>
          <p>
            Ride hosts have full control over who they allow to join their
            rides. Once a student has found a ride that they would like to join,
            they send a &quot;join request&quot; to the host of that ride. The
            host can check the student&apos;s profile to see their ratings and
            reviews, and then decide whether to accept or decline the
            student&apos;s request to join their ride.
          </p>
          <br></br>
          <p>
            Only after the host has accepted a student&apos;s request to join
            their ride do they both gain access to the other&apos;s phone number
            via WhatsApp. This direct communication is still required to
            finalise details such as exact pickup and dropoff points, luggage
            policy and any possible delays.
          </p>
        </div>
        <SectionHeader heading="User Reviews" />
        <div className="mb-6 text-pretty">
          <p>
            Unilifts doesn&apos;t just facilitate the finding and hosting of
            rides, it also allows students to review each other. Students who
            are part of a ride are able to leave a review for every other member
            of the ride. These reviews are then displayed on each student&apos;s
            profile.
          </p>
          <br></br>
          <p>
            When a student then hosts or requests to join a ride, other students
            can see the existing reviews on that student&apos;s profile. These
            reviews can then influence their decision to join or accept this
            student into their ride.
          </p>
        </div>
        <SectionHeader heading="Notifications" />
        <SectionHeader heading="Tech Stack" />
      </div>
    </div>
  );
}
