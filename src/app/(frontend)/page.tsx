
import { Header } from "@/components/header/header";
import { INFO_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Page() {
    const { data: info } = await sanityFetch({ query: INFO_QUERY })

    return (
        <div>
            <Header />
            <main className="flex justify-center md:justify-start m-5 md:ml-20 md:pl-10">
                <section className="md:w-2/3 p-5 bg-orange-100 text-red-dark rounded-md">
                    <h3 className="text-xl font-bold">Hi!</h3>
                    <div>

                    </div>
                </section>
            </main>
        </div>

    );
}