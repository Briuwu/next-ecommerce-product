import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <button className=" hover:outline outline-1 outline-orange rounded-full">
      <Image
        src={"/images/image-avatar.png"}
        width={100}
        height={100}
        alt="profile picture"
        className="object-contain w-8 md:w-12 aspect-square"
      />
      <span className="sr-only">Profile Picture</span>
    </button>
  );
};

export default Profile;
