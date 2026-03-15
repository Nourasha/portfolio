import { SocialIcon } from "react-social-icons";

export default function SosialButtons() {
  return (
    <div className="flex items-center gap-2">
      <SocialIcon
        url="https://github.com/Nourasha"
        target="_blank"
        fgColor="#fff"
        bgColor="#111827"
        style={{ height: 32, width: 32 }}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/nour-aboushawish-8130357b/"
        target="_blank"
        fgColor="#fff"
        bgColor="#111827"
        style={{ height: 32, width: 32 }}
      />
    </div>
  );
}