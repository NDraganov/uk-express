import homeVideo from "../../../public/home-video.mp4";

export default function HomeVideo() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/30"></div>
      <video
        className="h-screen w-full object-cover"
        src={homeVideo}
        autoPlay
        loop
      ></video>
    </div>
  );
}
