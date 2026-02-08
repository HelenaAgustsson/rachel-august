import { StandardHero } from "@/components/hero/standard-hero";
import Credits from "@/components/credits/credits";
import Section from "@/components/section/section";
import { sanityFetch } from "@/sanity/lib/live";
import { ACTING_QUERY } from "@/sanity/lib/queries";

const Page = async () => {
    const { data: credits } = await sanityFetch({ query: ACTING_QUERY })

    return (
        <div>
            <StandardHero />
            <main className="w-4/5 md:w-2/3 mx-auto mb-20">
                <Section>
                    <h3 className="text-xl lg:text-2xl font-bold">ACTING CREDITS</h3>
                    <Credits credits={credits} />
                </Section>
            </main>
        </div>
    )
}

export default Page;