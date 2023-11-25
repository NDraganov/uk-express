import NeedHelp from "../confirmation/NeedHelp";
import CurrentYear from "./CurrentYear";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="bg-sky-700 !text-slate-300 relative bottom-0 h-60 p-4">
      <div className="flex items-center justify-between">
        <NeedHelp />
        <CurrentYear />
        <SocialMediaIcons />
      </div>
    </footer>
  );
}
