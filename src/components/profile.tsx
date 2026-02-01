import { PROFILE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";

export default async function Profile() {
    const { data: profile } = await sanityFetch({ query: PROFILE_QUERY })

    return (
        <section className="md:w-2/3 p-5 bg-orange-100 text-red-dark rounded-md">
            <h3 className="text-xl font-bold">{profile.title}</h3>
            <PortableText value={profile.body} />
        </section>
    )
}