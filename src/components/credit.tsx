import { CREDITS_QUERYResult } from "@/sanity/types"

interface CreditProps {
    credit: NonNullable<CREDITS_QUERYResult[0]>
}

export default function CreditLine({ credit }: CreditProps) {
    return (
        <div>{credit.title}</div>
    )
}