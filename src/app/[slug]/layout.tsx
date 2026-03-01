import { SanityLive } from '@/sanity/lib/live'
import { Navbar } from '@/components/navbar/navbar'
import { StandardHero } from '@/components/hero/standard-hero'

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
            <StandardHero />
            <main className="w-4/5 md:w-2/3 mx-auto mb-20">
                {children}
            </main>
            <SanityLive />
        </div>
    )
}