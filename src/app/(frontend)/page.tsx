import { HomepageHero } from "@/components/hero/homepage-hero";
import Section from "@/components/section/section";
import Profile from "@/components/profile";


export default async function Page() {

    return (
        <div>
            <HomepageHero />
            <main className="md:w-2/3 m-5 md:mx-auto">
                <Section>
                    <Profile />
                </Section>
            </main>
        </div>

    );
}