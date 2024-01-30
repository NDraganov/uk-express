import { useNavigate } from "react-router-dom";
import VideoButton from "../../ui/VideoButton";
import homeVideo from "../../assets/home-video.mp4";

export default function HomeVideo() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/30"></div>
      <video
        className="h-screen w-full object-cover"
        src={homeVideo}
        autoPlay
        loop
      ></video>
      <div className="absolute left-0 top-0 h-full w-full px-4 py-60 text-white sm:px-20">
        <div className="flex h-full flex-col items-start justify-end">
          <div className="flex w-full flex-col justify-between sm:flex-row sm:items-end">
            <div>
              <p className="py-2 text-3xl font-medium sm:text-5xl">
                It is more than just sales
              </p>
              <p className="text-xl font-light sm:text-3xl">
                The e-commerce platform that you can trust
              </p>
            </div>
            <VideoButton
              title="Dive into the world of products"
              onClick={() => navigate("/products")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
