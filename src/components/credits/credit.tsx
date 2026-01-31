import { CREDITS_QUERYResult } from "@/sanity/types"

interface CreditProps {
    credit: NonNullable<CREDITS_QUERYResult[0]>
}

export default function CreditLine({ credit }: CreditProps) {
    return (
        <div className="my-5">
            <div className="font-bold">{credit.title}</div>
            <div>{credit.role}</div>
            <div>{credit.date}</div>
        </div>

    )
}