import { Navbar } from "../navbar/navbar"
import Image from "next/image"

export const Header = () => {
    return (
        <header>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold text-red-dark">Rachel August</h1>
                <Navbar />
            </div>
            <div className="h-[20rem] flex justify-center my-3 bg-linear-to-r from-orange-dark to-yellow-light">
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
            </div>
        </header>
    )
}