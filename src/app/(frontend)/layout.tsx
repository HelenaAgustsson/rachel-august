import { SanityLive } from '@/sanity/lib/live'
import { Header } from '@/components/header/header'
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
            <Header />
            <div className="container mx-auto">{children}</div>
            <SanityLive />
        </div>
    )
}