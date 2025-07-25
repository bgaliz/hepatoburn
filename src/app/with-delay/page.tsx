import { VideoComponent } from "@/components/video/video.component"

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center my-24">
        <div className="flex w-full h-[800px] overflow-hidden">
            <VideoComponent/>
        </div>
    </div>
  );
}
