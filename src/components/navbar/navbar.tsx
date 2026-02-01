import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex gap-3 m-5 font-semibold text-yellow-light md:text-red-dark">
            <Link href="acting" className="flex flex-col justify-end hover:underline">Acting</Link>
            <Link href="voiceover" className="flex flex-col justify-end hover:underline">Voice Over</Link>
            <Link href="contact" className="flex flex-col justify-end hover:underline">Contact</Link>
        </nav>
    )
}