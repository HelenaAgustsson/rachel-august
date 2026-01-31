import { SanityLive } from '@/sanity/lib/live'
import { Header } from '@/components/header/header'

export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <Header />
            {children}
            <SanityLive />
        </div>
    )
}