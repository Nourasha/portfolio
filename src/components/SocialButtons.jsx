import { SocialIcon } from "react-social-icons";
import { GITHUB_URL, LINKEDIN_URL } from "../lib/constants";

export default function SocialButtons({ variant = "light" }) {
  const colors = variant === "dark"
    ? { fgColor: "#12122a", bgColor: "#ffffff" }
    : { fgColor: "#ffffff", bgColor: "#15142b" };

  return (
    <div className="flex items-center gap-2">
      <SocialIcon
        url={GITHUB_URL}
        target="_blank"
        fgColor={colors.fgColor}
        bgColor={colors.bgColor}
        style={{ height: 32, width: 32 }}
      />
      <SocialIcon
        url={LINKEDIN_URL}
        target="_blank"
        fgColor={colors.fgColor}
        bgColor={colors.bgColor}
        style={{ height: 32, width: 32 }}
      />
    </div>
  );
}
