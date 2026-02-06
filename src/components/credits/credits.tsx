
import { CREDITS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import dayjs from "dayjs";
import CreditLine from "./credit";

export default async function Credits() {
    const { data: credits } = await sanityFetch({ query: CREDITS_QUERY });

    credits.sort((a, b): number => {
        return dayjs(b.date).diff(a.date);
    })


    return (
        <div className="p-5 bg-orange-100 text-red-dark rounded-md">
            <h3 className="text-xl lg:text-2xl font-bold">ACTING CREDITS</h3>
            <div className="mt-10">
                {credits ? credits.map((credit, index) => <CreditLine key={index} credit={credit} />) : null}
            </div>
        </div>
    )
}

