import OurStory from "../features/about/OurStory";
import OurMission from "../features/about/OurMission";
import AnimationPageWrapper from "../ui/AnimationPageWrapper";

export default function About() {
  return (
    <main className="-mt-11 sm:mt-10">
      <AnimationPageWrapper>
        <OurStory />
        <OurMission />
      </AnimationPageWrapper>
    </main>
  );
}
