import { VOICEOVER_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"

interface CreditProps {
    credit: NonNullable<VOICEOVER_QUERYResult[0]>
}

export default function CreditLine({ credit }: CreditProps) {

    return (
        <div className="flex gap-5 mb-10 pb-10 border-b border-red-dark border-dashed ">
            <div>
                {credit.thumbnail ? (
                    <Image src={urlFor(credit.thumbnail).url()}
                        width={150}
                        height={150}
                        alt=""
                        className="object-contain w-[100px]"
                    />
                ) : null}
            </div>
            <div>
                <div className="font-bold">{credit.title}</div>
                {credit.format ? <div>Format: {credit.format}</div> : null}
                <div>Role: {credit.role}</div>
                <div>{credit.date.split("-")[0]}</div>
            </div>
        </div>

    )
}