import { Navbar } from "../navbar/navbar"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="mt-10 mb-30 container mx-auto">
            <div className="flex my-3 gap-5">
                <div className="flex flex-col justify-center">
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
                <div className="flex flex-col justify-center">
                    <h1 className="text-8xl font-bold text-red-dark">RACHEL AUGUST</h1>
                    <h2 className="text-3xl font-bold text-red-dark">Actress & Voiceover Artist</h2>
                </div>

            </div>
        </header>
    )
}