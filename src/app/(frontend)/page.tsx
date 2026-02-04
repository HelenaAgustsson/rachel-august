import { HomepageHero } from "@/components/hero/homepage-hero";
import Profile from "@/components/profile";

export default async function Page() {

    return (
        <div>
            <HomepageHero />
            <main className="flex justify-center m-5">
                <Profile />
            </main>
        </div>

    );
}