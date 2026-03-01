import { REP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";

export default async function Representation() {
    const { data: rep } = await sanityFetch({ query: REP_QUERY })

    return (
        <>
            {rep ? (
                <div>
                    <h3 className="text-xl font-bold">{rep.title}</h3>
                    <PortableText value={rep.body} />
                </div>
            ) : null}
        </>
    )
}