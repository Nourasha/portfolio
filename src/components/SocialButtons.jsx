import { SocialIcon } from "react-social-icons";

export default function SocialButtons({ variant = "light" }) {
  const colors = variant === "dark"
    ? { fgColor: "#12122a", bgColor: "#ffffff" }
    : { fgColor: "#ffffff", bgColor: "#15142b" };

  return (
    <div className="flex items-center gap-2">
      <SocialIcon
        url="https://github.com/Nourasha"
        target="_blank"
        fgColor={colors.fgColor}
        bgColor={colors.bgColor}
        style={{ height: 32, width: 32 }}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/nour-aboushawish-8130357b/"
        target="_blank"
        fgColor={colors.fgColor}
        bgColor={colors.bgColor}
        style={{ height: 32, width: 32 }}
      />
    </div>
  );
}
