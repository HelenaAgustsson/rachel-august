
import dayjs from "dayjs";
import Section from "../section/section";
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
        <div>
            <div className="mt-10">
                {credits ? credits.map((credit, index) => <CreditLine key={index} credit={credit} />) : null}
            </div>
        </div>
    )
}

