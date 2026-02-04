
import Image from "next/image"

export const HomepageHero = () => {
    return (
        <header className="mt-10 mb-30 mx-auto flex justify-center">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex justify-center">
                    <div className="w-[300px] h-[300px]">
                        <Image
                            src="/rachel.jpeg"
                            className="rounded-full"
                            width={300}
                            height={300}
                            alt="Rachel August photo"
                            preload={true}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-col justify-center">
                    <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold text-red-dark text-center md:text-left">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:mr-5">RACHEL</div>
                            <div>AUGUST</div>
                        </div>
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-bold text-red-dark text-center md:text-left">Actress & Voiceover Artist</h2>
                </div>
            </div>
        </header>
    )
}