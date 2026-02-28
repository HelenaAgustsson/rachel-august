type VideoProps = {
    src: string;
}

const VideoComponent = ({ src }: VideoProps) => {
    return (
        <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe className="absolute w-full h-full top-0 bottom-0 left-0 right-0" src={src} allowFullScreen />
        </div>
    )
}

export default VideoComponent;