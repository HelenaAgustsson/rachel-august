import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex gap-3">
            <Link href="acting" className="flex flex-col justify-end">Acting</Link>
            <Link href="voiceover" className="flex flex-col justify-end">Voice Over</Link>
            <Link href="contact" className="flex flex-col justify-end">Contact</Link>
        </nav>
    )
}