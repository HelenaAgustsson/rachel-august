import { SanityLive } from '@/sanity/lib/live'
import { Navbar } from '@/components/navbar/navbar'

export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <div className="flex justify-end">
                <Navbar />
            </div>
            {children}
            <SanityLive />
        </div>
    )
}