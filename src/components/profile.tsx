import { PROFILE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";

export default async function Profile() {
    const { data: profile } = await sanityFetch({ query: PROFILE_QUERY })

    return (
        <>
            {profile ? (
                <div>
                    <h3 className="text-xl font-bold">{profile.title}</h3>
                    <PortableText value={profile.body} />
                </div>
            ) : null}
        </>
    )
}