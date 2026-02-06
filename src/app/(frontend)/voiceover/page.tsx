import { StandardHero } from "@/components/hero/standard-hero";
import Credits from "@/components/credits/credits";

const Page = () => {
    return (
        <div>
            <StandardHero />
            <main className="w-4/5 md:w-2/3 mx-auto mb-20 p-5 bg-orange-100 text-red-dark rounded-md">
                <Credits />
            </main>
        </div>
    )
}

export default Page;