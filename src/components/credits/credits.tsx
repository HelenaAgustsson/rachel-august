
import dayjs from "dayjs";
import CreditLine from "./credit";
import { VOICEOVER_QUERYResult, ACTING_QUERYResult } from "@/sanity/types";

interface CreditProps {
    credits: VOICEOVER_QUERYResult | ACTING_QUERYResult
}

export default async function Credits({ credits }: CreditProps) {

    credits ? (
        credits.sort((a, b): number => {
            return dayjs(b.date).diff(a.date);
        })
    ) : null

    return (
        <div className="p-5 bg-orange-100 text-red-dark rounded-md">
            <h3 className="text-xl lg:text-2xl font-bold">ACTING CREDITS</h3>
            <div className="mt-10">
                {credits ? credits.map((credit, index) => <CreditLine key={index} credit={credit} />) : null}
            </div>
        </div>
    )
}

