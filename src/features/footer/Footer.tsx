import NeedHelp from "../confirmation/NeedHelp";
import CurrentYear from "./CurrentYear";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="h-60 border-t border-gray-300 p-4 !text-black">
      <div className="flex items-center justify-between">
        <NeedHelp />
        <CurrentYear />
        <SocialMediaIcons />
      </div>
    </footer>
  );
}
