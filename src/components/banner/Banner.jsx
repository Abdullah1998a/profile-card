import banner from "./profile-banner.jfif";

export default function Banner() {
  return (
    <div className="h-16 sm:h-24 overflow-clip border-b-4 border-sky-800 dark:border-[tan]">
      <img
        src={banner}
        alt="banner image"
        className="object-cover"
        style={{ objectPosition: "center -5.5rem" }}
      />
    </div>
  );
}
