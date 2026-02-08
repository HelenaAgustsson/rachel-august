import { StandardHero } from "@/components/hero/standard-hero";
import Credits from "@/components/credits/credits";
import { sanityFetch } from "@/sanity/lib/live";
import { ACTING_QUERY } from "@/sanity/lib/queries";

const Page = async () => {
    const { data: credits } = await sanityFetch({ query: ACTING_QUERY })

    return (
        <div>
            <StandardHero />
            <main className="w-4/5 md:w-2/3 mx-auto mb-20 p-5 bg-orange-100 text-red-dark rounded-md">
                <Credits credits={credits} />
            </main>
        </div>
    )
}

export default Page;