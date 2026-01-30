
import { CREDITS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import CreditLine from "./credit";

export default async function Credits() {
    const { data: credits } = await sanityFetch({ query: CREDITS_QUERY });

    return (
        <div>
            {
                credits ? credits.map((credit, index) => <CreditLine key={index} credit={credit} />) : null
            }
        </div>
    )
}

