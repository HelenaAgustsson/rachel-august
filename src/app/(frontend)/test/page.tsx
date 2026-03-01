import { StandardHero } from "@/components/hero/standard-hero";
import Section from "@/components/section/section";


const Page = () => {
    return (
        <div>
            <StandardHero />
            <main className="w-4/5 md:w-2/3 mx-auto mb-20">
                <Section>

                </Section>
            </main>
        </div>
    )
}

export default Page;