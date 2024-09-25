import { Dot } from "lucide-react";
import Image from "next/image";
import profilePicture from "/Profile.jpg";

export default function HeaderBar() {
  return (
    <div className="bg-primary h-24 md:h-40 text-white grid grid-cols-3 md:grid-cols-5 items-center">
      <div className="flex justify-center w-full my-5  md:col-span-2 max-h-24 md:max-h-40">
        <div className="h-24 w-24 md:h-52 md:w-52 relative">
          <Image
            src={profilePicture}
            fill
            layout="fill"
            objectFit="cover"
            alt="profile picture"
            className="rounded-full "
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center  col-span-2 md:col-span-3 pb-10">
        <span className="font-bold text-xl md:text-4xl">
          CHRISTIAAN MYBURGH
        </span>
        <div className="flex items-center text-sm md:text-lg text-white">
          <span>Engineer</span>
          <Dot className="w-5 h-5 md:w-8 md:h-8 " />
          <span>Product Owner</span>
          <Dot className="w-5 h-5 md:w-8 md:h-8 " />
          <span>Dev</span>
        </div>
      </div>
    </div>
  );
}
