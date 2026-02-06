
import Image from "next/image"
import Link from "next/link"

export const StandardHero = () => {
    return (
        <header className="mt-5 mb-20 mx-auto flex justify-center">
            <Link href="/">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex justify-center">
                        <div className="w-[150px] h-[150px]">
                            <Image
                                src="/rachel.jpeg"
                                className="rounded-full"
                                width={150}
                                height={150}
                                alt="Rachel August photo"
                                preload={true}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-red-dark text-center md:text-left">
                            <div className="flex flex-col lg:flex-row">
                                RACHEL AUGUST
                            </div>
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-bold text-red-dark text-center md:text-left">Actress & Voiceover Artist</h2>
                    </div>
                </div>
            </Link>
        </header>
    )
}