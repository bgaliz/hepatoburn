import React from "react";
import ReactPlayer from "react-player";

export const VideoComponent = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <ReactPlayer
                src="https://www.youtube.com/watch?v=dKDo_Qwaa9E"
                playing
                muted
                controls={false}
                width="100%"
                height="100%"
                rel="0"
            />
        </div>
    )
}