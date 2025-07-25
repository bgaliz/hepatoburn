import { ButtonCTA } from "@/components/button/button.component"
import { VideoComponent } from "@/components/video/video.component"

export const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-20">
            <div>
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Cientistas revelam um fator oculto por trás da gordura abdominal persistente — prepare-se para se surpreender!
                </h1>
            </div>
            <div className="flex flex-col gap-12 w-full h-[550px] overflow-hidden flex items-center justify-center">
                <VideoComponent/>
                <ButtonCTA />
            </div>
        </div>
    )
}