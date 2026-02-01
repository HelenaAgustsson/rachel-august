
import Image from "next/image"

export const Header = () => {
    return (
        <header className="mt-10 mb-30 flex justify-center md:justify-start mx-5 md:ml-20 md:pl-10">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-row md:flex-col justify-center">
                    <div className="w-[300px] h-[300px]">
                        <Image
                            src="/rachel.jpeg"
                            className="rounded-full"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                            preload={true}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-col justify-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-dark text-center md:text-left">RACHEL AUGUST</h1>
                    <h2 className="text-2xl lg:text-3xl font-bold text-red-dark text-center md:text-left">Actress & Voiceover Artist</h2>
                </div>
            </div>
        </header>
    )
}