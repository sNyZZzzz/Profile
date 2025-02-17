import { Globe, Mail, MapPin, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function ContactInfo() {
  return (
    <div>
      <SectionHeader heading="Contact Info" />
      <ul className="flex flex-col gap-2 md:gap-3 md:mt-3">
        <a
          className="flex gap-2 items-center"
          href="mailto: christiaanmyburgh01@gmail.com"
        >
          <Mail className="md:h-5 md:w-5 h-4 w-4 " />{" "}
          <span>christiaanmyburgh01@gmail.com</span>
        </a>
        <a className="flex gap-2 items-center" href="tel:+27720228765">
          <Smartphone className="md:h-5 md:w-5 h-4 w-4 " />{" "}
          <span>+27 72 022 8765</span>
        </a>
        <a
          className="flex gap-2 items-center"
          href="https://maps.app.goo.gl/RwdYWYyVLLiETtpM7"
          target="_blank"
        >
          <MapPin className="md:h-5 md:w-5 h-4 w-4 " />{" "}
          <span>Melrose, Johannesburg</span>
        </a>
        <a
          className="flex gap-2 items-center"
          href="https://www.cmyburgh.com"
          target="_blank"
        >
          <Globe className="md:h-5 md:w-5 h-4 w-4 " /> <span>cmyburgh.com</span>
        </a>
      </ul>
    </div>
  );
}
